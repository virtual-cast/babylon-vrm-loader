import { Material } from '@babylonjs/core/Materials/material';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Nullable } from '@babylonjs/core/types';
import { GLTFLoader, IMaterial } from '@babylonjs/loaders/glTF/2.0';
/**
 * VRM で指定される Material を生成する
 * [VRM が提供するシェーダ](https://dwango.github.io/vrm/vrm_spec/#vrm%E3%81%8C%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8B%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%80%E3%83%BC) を特定し読み込む
 * - UnlitTexture: 不透明, VRM ファイル側で [KHR_materials_unlit](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit/) が定義されているため、何もしない
 * - UnlitCutout: 透明度が閾値以下の部分を透明とする, 同上
 * - UnlitTransparent: アルファブレンド。ZWriteしない, 同上
 * - UnlitTransparentZWrite: アルファブレンド。ZWriteする, 同上に加え、プロパティで ZWrite を強制しています
 * - MToon: MToonMaterial を実装し差し替えています。
 */
export declare class VRMMaterialGenerator {
    private readonly loader;
    /**
     * MToonMaterial テクスチャ名のマッピング
     */
    static readonly TEXTURE_MAP: {
        _MainTex: string;
        _ShadeTexture: string;
        _EmissionMap: string;
        _BumpMap: string;
        _ReceiveShadowTexture: string;
        _ShadingGradeTexture: string;
        _SphereAdd: string;
        _OutlineWidthTexture: string;
    };
    /**
     * @inheritdoc
     */
    constructor(loader: GLTFLoader);
    /**
     * マテリアルを生成する Promise を返す
     * VRM 対象外の場合は null
     */
    generate(context: string, material: IMaterial, mesh: Mesh, babylonDrawMode: number, assign: (babylonMaterial: Material) => void): Nullable<Promise<Material>>;
    /**
     * VRM または VCI からマテリアルプロパティの配列を探す
     */
    private getMaterialProperties;
    /**
     * テクスチャを読み込む
     * @param context 現在のコンテキスト
     * @param material 生成した MToonMaterial
     * @param prop 生成した MToonMaterial のマテリアルプロパティ
     */
    private loadMToonTexturesAsync;
    /**
     * シェーダ名からマテリアルを推測して生成する
     * @param context 現在のコンテキスト
     * @param material glTF マテリアル
     * @param babylonDrawMode 描画種類
     * @param prop 生成するマテリアルプロパティ
     */
    private createMaterialByShader;
    /**
     * マテリアル名から MaterialProperty を探す
     * @param materialName マテリアル名
     * @param extension 拡張データ
     */
    private findMaterialPropertyByName;
    /**
     * マテリアルに VRM プロパティを設定
     * VRM プロパティとマテリアルプロパティのマッピングを行っている
     * 初期値はマテリアル実装側に持っているため、値がある場合のみ上書きする
     * @param material
     * @param prop
     */
    private setMToonMaterialProperties;
}
