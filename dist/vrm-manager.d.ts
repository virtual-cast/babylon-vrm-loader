import { IVRM } from './vrm-interfaces';
import { Scene } from '@babylonjs/core/scene';
import { Nullable } from '@babylonjs/core/types';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
export declare type HumanBoneName = 'hips' | 'leftUpperLeg' | 'rightUpperLeg' | 'leftLowerLeg' | 'rightLowerLeg' | 'leftFoot' | 'rightFoot' | 'spine' | 'chest' | 'neck' | 'head' | 'leftShoulder' | 'rightShoulder' | 'leftUpperArm' | 'rightUpperArm' | 'leftLowerArm' | 'rightLowerArm' | 'leftHand' | 'rightHand' | 'leftToes' | 'rightToes' | 'leftEye' | 'rightEye' | 'jaw' | 'leftThumbProximal' | 'leftThumbIntermediate' | 'leftThumbDistal' | 'leftIndexProximal' | 'leftIndexIntermediate' | 'leftIndexDistal' | 'leftMiddleProximal' | 'leftMiddleIntermediate' | 'leftMiddleDistal' | 'leftRingProximal' | 'leftRingIntermediate' | 'leftRingDistal' | 'leftLittleProximal' | 'leftLittleIntermediate' | 'leftLittleDistal' | 'rightThumbProximal' | 'rightThumbIntermediate' | 'rightThumbDistal' | 'rightIndexProximal' | 'rightIndexIntermediate' | 'rightIndexDistal' | 'rightMiddleProximal' | 'rightMiddleIntermediate' | 'rightMiddleDistal' | 'rightRingProximal' | 'rightRingIntermediate' | 'rightRingDistal' | 'rightLittleProximal' | 'rightLittleIntermediate' | 'rightLittleDistal' | 'upperChest' | string;
/**
 * VRM キャラクターを動作させるためのマネージャ
 */
export declare class VRMManager {
    readonly ext: IVRM;
    readonly scene: Scene;
    private readonly meshesFrom;
    private readonly transformNodesFrom;
    private morphTargetMap;
    private presetMorphTargetMap;
    private transformNodeMap;
    private transformNodeCache;
    constructor(ext: IVRM, scene: Scene, meshesFrom: number, transformNodesFrom: number);
    dispose(): void;
    /**
     * モーフィングを行う
     * @param label モーフ名
     * @param value 値(0〜1)
     */
    morphing(label: string, value: number): void;
    /**
     * プリセットモーフのモーフィングを行う
     * @param label モーフ名
     * @param value 値(0〜1)
     */
    morphingPreset(label: string, value: number): void;
    /**
     * ボーン名からそのボーンに該当する TransformNode を取得する
     * @param name HumanBoneName
     */
    getBone(name: HumanBoneName): Nullable<TransformNode>;
    /**
     * 事前に MorphTarget と BlendShape を紐付ける
     */
    private constructMorphTargetMap;
    /**
     * 事前に TransformNode と bone 名を紐づける
     */
    private constructTransformNodeMap;
    /**
     * node 番号から該当する TransformNode を探す
     * 数が多くなるのでキャッシュに参照を持つ構造にする
     * gltf の node 番号は `metadata.gltf.pointers` に記録されている
     * @param nodeIndex
     */
    private findTransformNode;
    /**
     * mesh 番号からメッシュを探す
     * gltf の mesh 番号は `metadata.gltf.pointers` に記録されている
     */
    private findMesh;
}
