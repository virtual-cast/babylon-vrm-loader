import { Material } from '@babylonjs/core/Materials/material';
import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { Color3 } from '@babylonjs/core/Maths/math';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Nullable } from '@babylonjs/core/types';
import { GLTFLoader, IMaterial } from '@babylonjs/loaders/glTF/2.0';
import { MToonMaterial } from 'babylon-mtoon-material';
import { IVRMMaterialProperty, IVRMMaterialPropertyShader, IVRMVectorMaterialProperty } from './vrm-interfaces';
import { Engine } from '@babylonjs/core/Engines/engine';

/**
 * VRM で指定される Material を生成する
 * [VRM が提供するシェーダ](https://dwango.github.io/vrm/vrm_spec/#vrm%E3%81%8C%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8B%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%80%E3%83%BC) を特定し読み込む
 * - UnlitTexture: 不透明, VRM ファイル側で [KHR_materials_unlit](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit/) が定義されているため、何もしない
 * - UnlitCutout: 透明度が閾値以下の部分を透明とする, 同上
 * - UnlitTransparent: アルファブレンド。ZWriteしない, 同上
 * - UnlitTransparentZWrite: アルファブレンド。ZWriteする, 同上に加え、プロパティで ZWrite を強制しています
 * - MToon: MToonMaterial を実装し差し替えています。
 */
export class VRMMaterialGenerator {
    /**
     * MToonMaterial テクスチャ名のマッピング
     */
    public static readonly TEXTURE_MAP = {
        _MainTex: 'diffuseTexture',
        _ShadeTexture: 'shadeTexture',
        _EmissionMap: 'emissiveTexture',
        _BumpMap: 'bumpTexture',
        _ReceiveShadowTexture: 'receiveShadowTexture',
        _ShadingGradeTexture: 'shadingGradeTexture',
        _SphereAdd: 'matCapTexture',
        _OutlineWidthTexture: 'outlineWidthTexture',
    };

    /**
     * @inheritdoc
     */
    public constructor(
        private readonly loader: GLTFLoader,
    ) {}

    /**
     * マテリアルを生成する Promise を返す
     * VRM 対象外の場合は null
     */
    public generate(
        context: string,
        material: IMaterial,
        mesh: Mesh,
        babylonDrawMode: number,
        assign: (babylonMaterial: Material) => void,
    ): Nullable<Promise<Material>> {
        const materials = this.getMaterialProperties();
        if (!materials) {
            return null;
        }
        const materialProp = this.findMaterialPropertyByName(material.name, materials);
        if (!materialProp) {
            return null;
        }
        const newMaterial = this.createMaterialByShader(context, material, babylonDrawMode, materialProp);
        if (!newMaterial) {
            return null;
        }
        assign(newMaterial);
        if (newMaterial instanceof MToonMaterial) {
            mesh.alphaIndex = materialProp.renderQueue;
            return this.loadMToonTexturesAsync(context, newMaterial, materialProp);
        }
        return Promise.resolve(newMaterial);
    }

    /**
     * VRM または VCI からマテリアルプロパティの配列を探す
     */
    private getMaterialProperties(): Nullable<IVRMMaterialProperty[]> {
        if (!this.loader.gltf.extensions) {
            return null;
        }
        if (this.loader.gltf.extensions.VRM && this.loader.gltf.extensions.VRM.materialProperties) {
            return this.loader.gltf.extensions.VRM.materialProperties;
        }
        if (this.loader.gltf.extensions.VCAST_vci_material_unity && this.loader.gltf.extensions.VCAST_vci_material_unity.materials) {
            return this.loader.gltf.extensions.VCAST_vci_material_unity.materials;
        }
        return null;
    }

    /**
     * テクスチャを読み込む
     * @param context 現在のコンテキスト
     * @param material 生成した MToonMaterial
     * @param prop 生成した MToonMaterial のマテリアルプロパティ
     */
    private async loadMToonTexturesAsync(
        context: string,
        material: MToonMaterial,
        prop: IVRMMaterialProperty,
    ): Promise<Material> {
        const promises: Array<Promise<BaseTexture>> = [];
        for (const baseName of Object.keys(VRMMaterialGenerator.TEXTURE_MAP)) {
            const index = prop.textureProperties[baseName];
            if (typeof index === 'undefined') {
                continue;
            }
            const propName = (VRMMaterialGenerator.TEXTURE_MAP as any)[baseName] as string;
            const assignTexture = ((name: string, option?: IVRMVectorMaterialProperty) => {
                return (babylonTexture: BaseTexture) => {
                    // 実際は Texture インスタンスが来るのでキャスト
                    const t = babylonTexture as Texture;
                    if (!!option) {
                        t.uOffset = option[0];
                        t.vOffset = option[1];
                        t.uScale = option[2];
                        t.vScale = option[3];
                    }
                    (material as any)[name] = t;
                };
            })(propName, prop.vectorProperties[baseName]);

            promises.push(this.loader.loadTextureInfoAsync(context, {
                index,
                texCoord: 0,
            }, assignTexture));
        }
        return Promise.all(promises).then(() => material);
    }

    /**
     * シェーダ名からマテリアルを推測して生成する
     * @param context 現在のコンテキスト
     * @param material glTF マテリアル
     * @param babylonDrawMode 描画種類
     * @param prop 生成するマテリアルプロパティ
     */
    private createMaterialByShader(
        context: string,
        material: IMaterial,
        babylonDrawMode: number,
        prop: IVRMMaterialProperty,
    ): Nullable<Material> {
        if (prop.shader === IVRMMaterialPropertyShader.VRMMToon) {
            const mtoonMaterial = new MToonMaterial(
                material.name || `material${material.index}`,
                this.loader.babylonScene,
            );
            this.setMToonMaterialProperties(mtoonMaterial, prop);
            return mtoonMaterial;
        }
        if (prop.shader === IVRMMaterialPropertyShader.VRMUnlitTransparentZWrite) {
            const mat = this.loader.createMaterial(context, material, babylonDrawMode);
            // 通常マテリアルに Depth Write を強制
            mat.disableDepthWrite = false;
            mat.forceDepthWrite = true;
            return mat;
        }
        return null;
    }

    /**
     * マテリアル名から MaterialProperty を探す
     * @param materialName マテリアル名
     * @param extension 拡張データ
     */
    private findMaterialPropertyByName(materialName?: string, materials?: IVRMMaterialProperty[]): Nullable<IVRMMaterialProperty> {
        if (!materialName || !materials) {
            return null;
        }
        const mats = materials.filter(
            (v) => v.name === materialName,
        );
        if (mats.length === 0) {
            return null;
        } else if (mats.length >= 2) {
            this.loader.log('Duplicated name found' + materialName);
        }
        return mats[mats.length - 1];
    }

    /**
     * マテリアルに VRM プロパティを設定
     * VRM プロパティとマテリアルプロパティのマッピングを行っている
     * 初期値はマテリアル実装側に持っているため、値がある場合のみ上書きする
     * @param material
     * @param prop
     */
    private setMToonMaterialProperties(material: MToonMaterial, prop: IVRMMaterialProperty) {
        if (typeof prop.floatProperties._DebugMode !== 'undefined') {
            material.debugMode = prop.floatProperties._DebugMode;
        }
        if (typeof prop.floatProperties._OutlineWidthMode !== 'undefined') {
            material.outlineWidthMode = prop.floatProperties._OutlineWidthMode;
        }
        if (typeof prop.floatProperties._OutlineColorMode !== 'undefined') {
            material.outlineColorMode = prop.floatProperties._OutlineColorMode;
        }
        if (typeof prop.floatProperties._CullMode !== 'undefined') {
            material.cullMode = prop.floatProperties._CullMode;
        }
        if (typeof prop.floatProperties._OutlineCullMode !== 'undefined') {
            material.outlineCullMode = prop.floatProperties._OutlineCullMode;
        }
        if (typeof prop.floatProperties._Cutoff !== 'undefined') {
            material.alphaCutOff = prop.floatProperties._Cutoff;
        }
        if (typeof prop.vectorProperties._Color !== 'undefined') {
            material.diffuseColor = new Color3(
                prop.vectorProperties._Color[0],
                prop.vectorProperties._Color[1],
                prop.vectorProperties._Color[2],
            );
            material.alpha = prop.vectorProperties._Color[3];
        }
        if (typeof prop.vectorProperties._ShadeColor !== 'undefined') {
            material.shadeColor = new Color3(
                prop.vectorProperties._ShadeColor[0],
                prop.vectorProperties._ShadeColor[1],
                prop.vectorProperties._ShadeColor[2],
            );
        }
        if (typeof prop.floatProperties._BumpScale !== 'undefined') {
            material.bumpScale = prop.floatProperties._BumpScale;
        }
        if (typeof prop.floatProperties._ReceiveShadowRate !== 'undefined') {
            material.receiveShadowRate = prop.floatProperties._ReceiveShadowRate;
        }
        if (typeof prop.floatProperties._ShadingGradeRate !== 'undefined') {
            material.shadingGradeRate = prop.floatProperties._ShadingGradeRate;
        }
        if (typeof prop.floatProperties._ShadeShift !== 'undefined') {
            material.shadeShift = prop.floatProperties._ShadeShift;
        }
        if (typeof prop.floatProperties._ShadeToony !== 'undefined') {
            material.shadeToony = prop.floatProperties._ShadeToony;
        }
        if (typeof prop.floatProperties._LightColorAttenuation !== 'undefined') {
            material.lightColorAttenuation = prop.floatProperties._LightColorAttenuation;
        }
        if (typeof prop.floatProperties._IndirectLightIntensity !== 'undefined') {
            material.indirectLightIntensity = prop.floatProperties._IndirectLightIntensity;
        }
        if (typeof prop.vectorProperties._EmissionColor !== 'undefined') {
            material.emissiveColor = new Color3(
                prop.vectorProperties._EmissionColor[0],
                prop.vectorProperties._EmissionColor[1],
                prop.vectorProperties._EmissionColor[2],
            );
        }
        if (typeof prop.floatProperties._OutlineWidth !== 'undefined') {
            material.outlineWidth = prop.floatProperties._OutlineWidth;
        }
        if (typeof prop.floatProperties._OutlineScaledMaxDistance !== 'undefined') {
            material.outlineScaledMaxDistance = prop.floatProperties._OutlineScaledMaxDistance;
        }
        if (typeof prop.vectorProperties._OutlineColor !== 'undefined') {
            material.outlineColor = new Color3(
                prop.vectorProperties._OutlineColor[0],
                prop.vectorProperties._OutlineColor[1],
                prop.vectorProperties._OutlineColor[2],
            );
        }
        if (typeof prop.floatProperties._OutlineLightingMix !== 'undefined') {
            material.outlineLightingMix = prop.floatProperties._OutlineLightingMix;
        }
        if (typeof prop.floatProperties._BlendMode !== 'undefined') {
            switch (prop.floatProperties._BlendMode) {
                case 0: // Opaque
                    material.alphaBlend = false;
                    material.alphaTest = false;
                    material.alphaMode = Engine.ALPHA_DISABLE;
                    break;
                case 1: // TransparentCutout
                    material.alphaBlend = false;
                    material.alphaTest = true;
                    material.alphaMode = Engine.ALPHA_COMBINE;
                    break;
                case 2: // Transparent
                    material.alphaBlend = true;
                    material.alphaTest = false;
                    material.alphaMode = Engine.ALPHA_COMBINE;
                    break;
            }
        }
        if (typeof prop.keywordMap._ALPHABLEND_ON !== 'undefined') {
            material.alphaBlend = prop.keywordMap._ALPHABLEND_ON;
        }
        if (typeof prop.keywordMap._ALPHATEST_ON !== 'undefined') {
            material.alphaTest = prop.keywordMap._ALPHATEST_ON;
        }
        if (typeof prop.floatProperties._ZWrite !== 'undefined') {
            material.forceDepthWrite = prop.floatProperties._ZWrite === 1;
            if (material.forceDepthWrite) {
                material.disableDepthWrite = false;
            }
        }
    }
}
