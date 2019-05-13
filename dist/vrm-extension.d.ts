import { Material } from '@babylonjs/core/Materials/material';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Nullable } from '@babylonjs/core/types';
import { GLTFLoader, IGLTFLoaderExtension, IMaterial, IMeshPrimitive } from '@babylonjs/loaders/glTF/2.0';
/**
 * VRM 拡張を処理する
 * [Specification](https://github.com/vrm-c/UniVRM/tree/master/specification/)
 */
export declare class VRM implements IGLTFLoaderExtension {
    private loader;
    /**
     * @inheritdoc
     */
    readonly name = "VRM";
    /**
     * @inheritdoc
     */
    enabled: boolean;
    /**
     * この Mesh index 以降が読み込み対象
     */
    private meshesFrom;
    /**
     * この TransformNode index 以降が読み込み対象
     */
    private transformNodesFrom;
    /**
     * @inheritdoc
     */
    constructor(loader: GLTFLoader);
    /**
     * @inheritdoc
     */
    dispose(): void;
    /**
     * @inheritdoc
     */
    onReady(): void;
    /**
     * @inheritdoc
     */
    _loadVertexDataAsync(context: string, primitive: IMeshPrimitive, babylonMesh: Mesh): null;
    /**
     * @inheritdoc
     */
    _loadMaterialAsync(context: string, material: IMaterial, mesh: Mesh, babylonDrawMode: number, assign: (babylonMaterial: Material) => void): Nullable<Promise<Material>>;
}
