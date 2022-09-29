import type { Material } from '@babylonjs/core/Materials/material';
import type { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';
import type { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { Color3 } from '@babylonjs/core/Maths/math';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';
import type { Nullable } from '@babylonjs/core/types';
import type { GLTFLoader, IMaterial } from '@babylonjs/loaders/glTF/2.0';
import { MToonMaterial } from 'babylon-mtoon-material';
import type { IVRMMaterialProperty, IVRMVectorMaterialProperty } from './vrm-interfaces';
import { IVRMMaterialPropertyShader } from './vrm-interfaces';
import { Engine } from '@babylonjs/core/Engines/engine';

/**
 * VRM で指定される Material を生成する
 * [VRM が提供するシェーダ](https://vrm.dev/en/univrm/shaders/index.html) を特定し読み込む
 * - UnlitTexture: 不透明, VRM ファイル側で [KHR_materials_unlit](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_unlit) が定義されているため、何もしない
 * - UnlitCutout: 透明度が閾値以下の部分を透明とする, 同上
 * - UnlitTransparent: アルファブレンド。ZWriteしない, 同上
 * - UnlitTransparentZWrite: アルファブレンド。ZWriteする, 同上に加え、プロパティで ZWrite を強制しています
 * - MToon: MToonMaterial を差し替えています。
 */
export class VRMMaterialGenerator {
    /**
     * @inheritdoc
     */
    public constructor(private readonly loader: GLTFLoader) {}

    /**
     * マテリアルを生成する Promise を返す
     * VRM 対象外の場合は null
     */
    public generate(context: string, material: IMaterial, mesh: Mesh, babylonDrawMode: number, assign: (babylonMaterial: Material) => void): Nullable<Promise<Material>> {
        const materialProp = this.findMaterialPropertyByName(material.name, this.getMaterialProperties());
        if (!materialProp) {
            return null;
        }
        mesh.alphaIndex = materialProp.renderQueue;
        const newMaterial = this.createMaterialByShader(context, material, babylonDrawMode, materialProp);
        if (!newMaterial) {
            return null;
        }
        assign(newMaterial);
        if (newMaterial instanceof MToonMaterial) {
            return this.loadMToonTexturesAsync(context, newMaterial, materialProp);
        }
        return Promise.resolve(newMaterial);
    }

    /**
     * VRM または VCI からマテリアルプロパティの配列を探す
     */
    private getMaterialProperties(): IVRMMaterialProperty[] {
        if (!this.loader.gltf.extensions) {
            return [];
        }
        if (this.loader.gltf.extensions.VRM && this.loader.gltf.extensions.VRM.materialProperties) {
            return this.loader.gltf.extensions.VRM.materialProperties;
        }
        if (this.loader.gltf.extensions.VCAST_vci_material_unity && this.loader.gltf.extensions.VCAST_vci_material_unity.materials) {
            return this.loader.gltf.extensions.VCAST_vci_material_unity.materials;
        }
        return [];
    }

    /**
     * マテリアル名から MaterialProperty を探す
     * @param materialName マテリアル名
     * @param extension 拡張データ
     */
    private findMaterialPropertyByName(materialName: string | undefined, materials: IVRMMaterialProperty[]): Nullable<IVRMMaterialProperty> {
        if (!materialName || !materials) {
            return null;
        }
        const mats = materials.filter((v) => v.name === materialName);
        if (mats.length === 0) {
            return null;
        } else if (mats.length >= 2) {
            this.loader.log(`Duplicated vrm material name found: ${materialName}`);
        }
        return mats[mats.length - 1];
    }

    /**
     * テクスチャを読み込む
     * @param context 現在のコンテキスト
     * @param material 生成した MToonMaterial
     * @param prop 生成した MToonMaterial のマテリアルプロパティ
     */
    private loadMToonTexturesAsync(context: string, material: MToonMaterial, prop: IVRMMaterialProperty): Promise<Material> {
        const promises: Array<Promise<BaseTexture>> = [];
        // 全てのテクスチャの UV Offset & Scale はメインテクスチャのものを流用する
        const uvOffsetScale = prop.vectorProperties._MainTex;
        if (!uvOffsetScale) {
            return Promise.resolve(material);
        }
        const applyTexture = (index: number | undefined, callback: (texture: BaseTexture) => void) => {
            applyPropertyWhenDefined<number>(index, (value) => {
                promises.push(
                    this.loader.loadTextureInfoAsync(`${context}/textures/${index}`, { index: value }, (babylonTexture: BaseTexture) => {
                        // 実際は Texture インスタンスが来るのでキャスト
                        const t = babylonTexture as Texture;
                        t.uOffset = uvOffsetScale[0];
                        t.vOffset = uvOffsetScale[1];
                        t.uScale = uvOffsetScale[2];
                        t.vScale = uvOffsetScale[3];
                        callback(babylonTexture);
                    })
                );
            });
        };

        applyTexture(prop.textureProperties._MainTex, (texture) => {
            if (material.alphaBlend || material.alphaTest) {
                texture.hasAlpha = true;
            }
            material.diffuseTexture = texture;
        });
        applyTexture(prop.textureProperties._ShadeTexture, (texture) => (material.shadeTexture = texture));
        applyTexture(prop.textureProperties._BumpMap, (texture) => (material.bumpTexture = texture));
        applyTexture(prop.textureProperties._ReceiveShadowTexture, (texture) => (material.receiveShadowTexture = texture));
        applyTexture(prop.textureProperties._ShadingGradeTexture, (texture) => (material.shadingGradeTexture = texture));
        applyTexture(prop.textureProperties._RimTexture, (texture) => (material.rimTexture = texture));
        applyTexture(prop.textureProperties._SphereAdd, (texture) => (material.matCapTexture = texture));
        applyTexture(prop.textureProperties._EmissionMap, (texture) => (material.emissiveTexture = texture));
        applyTexture(prop.textureProperties._OutlineWidthTexture, (texture) => (material.outlineWidthTexture = texture));
        applyTexture(prop.textureProperties._UvAnimMaskTexture, (texture) => (material.uvAnimationMaskTexture = texture));

        return Promise.all(promises).then(() => material);
    }

    /**
     * シェーダ名からマテリアルを推測して生成する
     * @param context 現在のコンテキスト
     * @param material glTF マテリアル
     * @param babylonDrawMode 描画種類
     * @param prop 生成するマテリアルプロパティ
     */
    private createMaterialByShader(context: string, material: IMaterial, babylonDrawMode: number, prop: IVRMMaterialProperty): Nullable<Material> {
        if (prop.shader === IVRMMaterialPropertyShader.VRMMToon) {
            const mtoonMaterial = new MToonMaterial(material.name || `MToonMaterial${material.index}`, this.loader.babylonScene);
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
     * マテリアルに VRM プロパティを設定
     * VRM プロパティとマテリアルプロパティのマッピングを行っている
     * 初期値はマテリアル実装側に持っているため、値がある場合のみ上書きする
     */
    private setMToonMaterialProperties(material: MToonMaterial, prop: IVRMMaterialProperty) {
        applyPropertyWhenDefined<number>(prop.floatProperties._Cutoff, (value) => (material.alphaCutOff = value));
        applyPropertyWhenDefined<IVRMVectorMaterialProperty>(prop.vectorProperties._Color, (value) => {
            material.diffuseColor = new Color3(value[0], value[1], value[2]);
            material.alpha = value[3];
        });
        applyPropertyWhenDefined<IVRMVectorMaterialProperty>(prop.vectorProperties._ShadeColor, (value) => {
            material.shadeColor = new Color3(value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined<number>(prop.floatProperties._BumpScale, (value) => (material.bumpScale = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._ReceiveShadowRate, (value) => (material.receiveShadowRate = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._ShadingGradeRate, (value) => (material.shadingGradeRate = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._ShadeShift, (value) => (material.shadeShift = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._ShadeToony, (value) => (material.shadeToony = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._LightColorAttenuation, (value) => (material.lightColorAttenuation = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._IndirectLightIntensity, (value) => (material.indirectLightIntensity = value));
        applyPropertyWhenDefined<IVRMVectorMaterialProperty>(prop.vectorProperties._RimColor, (value) => {
            material.rimColor = new Color3(value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined<number>(prop.floatProperties._RimLightingMix, (value) => (material.rimLightingMix = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._RimFresnelPower, (value) => (material.rimFresnelPower = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._RimLift, (value) => (material.rimLift = value));
        applyPropertyWhenDefined<IVRMVectorMaterialProperty>(prop.vectorProperties._EmissionColor, (value) => {
            material.emissiveColor = new Color3(value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined<number>(prop.floatProperties._OutlineWidth, (value) => (material.outlineWidth = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._OutlineScaledMaxDistance, (value) => (material.outlineScaledMaxDistance = value));
        applyPropertyWhenDefined<IVRMVectorMaterialProperty>(prop.vectorProperties._OutlineColor, (value) => {
            material.outlineColor = new Color3(value[0], value[1], value[2]);
        });
        applyPropertyWhenDefined<number>(prop.floatProperties._OutlineLightingMix, (value) => (material.outlineLightingMix = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._UvAnimScrollX, (value) => (material.uvAnimationScrollX = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._UvAnimScrollY, (value) => (material.uvAnimationScrollY = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._UvAnimRotation, (value) => (material.uvAnimationRotation = value));

        applyPropertyWhenDefined<number>(prop.floatProperties._DebugMode, (value) => (material.debugMode = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._BlendMode, (value) => {
            switch (value) {
                case 0: // Opaque
                    material.alphaBlend = false;
                    material.alphaTest = false;
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
        });
        applyPropertyWhenDefined<number>(prop.floatProperties._OutlineWidthMode, (value) => (material.outlineWidthMode = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._OutlineColorMode, (value) => (material.outlineColorMode = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._CullMode, (value) => (material.cullMode = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._OutlineCullMode, (value) => (material.outlineCullMode = value));
        applyPropertyWhenDefined<boolean>(prop.keywordMap._ALPHABLEND_ON, (value) => (material.alphaBlend = value));
        applyPropertyWhenDefined<boolean>(prop.keywordMap._ALPHATEST_ON, (value) => (material.alphaTest = value));
        applyPropertyWhenDefined<number>(prop.floatProperties._ZWrite, (value) => {
            material.forceDepthWrite = Math.round(value) === 1;
            if (material.forceDepthWrite) {
                material.disableDepthWrite = false;
            }
        });
    }
}

/**
 * プロパティが設定されていればコールバックを実行する
 */
function applyPropertyWhenDefined<T>(prop: T | undefined, callback: (value: T) => void) {
    if (typeof prop === 'undefined') {
        return;
    }
    callback(prop);
}
