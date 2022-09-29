import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Nullable } from '@babylonjs/core/types';
import { BoneNotFoundError } from './errors';

interface TransformNodeMap {
    [name: string]: TransformNode;
}

/**
 * HumanoidBone を取得するメソッド群
 * @see https://docs.unity3d.com/ja/2018.3/ScriptReference/HumanBodyBones.html
 */
export class HumanoidBone {
    public constructor(private nodeMap: TransformNodeMap) {}

    public dispose() {
        (this.nodeMap as any) = null;
    }

    /**
     * 尻
     */
    public get hips() {
        return this.getMandatoryBone('hips');
    }
    /**
     * 左太もも
     */
    public get leftUpperLeg() {
        return this.getMandatoryBone('leftUpperLeg');
    }
    /**
     * 右太もも
     */
    public get rightUpperLeg() {
        return this.getMandatoryBone('rightUpperLeg');
    }
    /**
     * 左ひざ
     */
    public get leftLowerLeg() {
        return this.getMandatoryBone('leftLowerLeg');
    }
    /**
     * 右ひざ
     */
    public get rightLowerLeg() {
        return this.getMandatoryBone('rightLowerLeg');
    }
    /**
     * 左足首
     */
    public get leftFoot() {
        return this.getMandatoryBone('leftFoot');
    }
    /**
     * 右足首
     */
    public get rightFoot() {
        return this.getMandatoryBone('rightFoot');
    }
    /**
     * 脊椎の第一
     */
    public get spine() {
        return this.getMandatoryBone('spine');
    }
    /**
     * 胸
     */
    public get chest() {
        return this.getMandatoryBone('chest');
    }
    /**
     * 首
     */
    public get neck() {
        return this.getMandatoryBone('neck');
    }
    /**
     * 頭
     */
    public get head() {
        return this.getMandatoryBone('head');
    }
    /**
     * 左肩
     */
    public get leftShoulder() {
        return this.getMandatoryBone('leftShoulder');
    }
    /**
     * 右肩
     */
    public get rightShoulder() {
        return this.getMandatoryBone('rightShoulder');
    }
    /**
     * 左上腕
     */
    public get leftUpperArm() {
        return this.getMandatoryBone('leftUpperArm');
    }
    /**
     * 右上腕
     */
    public get rightUpperArm() {
        return this.getMandatoryBone('rightUpperArm');
    }
    /**
     * 左ひじ
     */
    public get leftLowerArm() {
        return this.getMandatoryBone('leftLowerArm');
    }
    /**
     * 右ひじ
     */
    public get rightLowerArm() {
        return this.getMandatoryBone('rightLowerArm');
    }
    /**
     * 左手首
     */
    public get leftHand() {
        return this.getMandatoryBone('leftHand');
    }
    /**
     * 右手首
     */
    public get rightHand() {
        return this.getMandatoryBone('rightHand');
    }
    /**
     * 左つま先(Optional)
     */
    public get leftToes() {
        return this.getOptionalBone('leftToes');
    }
    /**
     * 右つま先(Optional)
     */
    public get rightToes() {
        return this.getOptionalBone('rightToes');
    }
    /**
     * 左目(Optional)
     */
    public get leftEye() {
        return this.getOptionalBone('leftEye');
    }
    /**
     * 右目(Optional)
     */
    public get rightEye() {
        return this.getOptionalBone('rightEye');
    }
    /**
     * 顎(Optional)
     */
    public get jaw() {
        return this.getOptionalBone('jaw');
    }
    /**
     * 左親指第一指骨(Optional)
     */
    public get leftThumbProximal() {
        return this.getOptionalBone('leftThumbProximal');
    }
    /**
     * 左親指第二指骨(Optional)
     */
    public get leftThumbIntermediate() {
        return this.getOptionalBone('leftThumbIntermediate');
    }
    /**
     * 左親指第三指骨(Optional)
     */
    public get leftThumbDistal() {
        return this.getOptionalBone('leftThumbDistal');
    }
    /**
     * 左人差し指第一指骨(Optional)
     */
    public get leftIndexProximal() {
        return this.getOptionalBone('leftIndexProximal');
    }
    /**
     * 左人差し指第二指骨(Optional)
     */
    public get leftIndexIntermediate() {
        return this.getOptionalBone('leftIndexIntermediate');
    }
    /**
     * 左人差し指第三指骨(Optional)
     */
    public get leftIndexDistal() {
        return this.getOptionalBone('leftIndexDistal');
    }
    /**
     * 左中指第一指骨(Optional)
     */
    public get leftMiddleProximal() {
        return this.getOptionalBone('leftMiddleProximal');
    }
    /**
     * 左中指第二指骨(Optional)
     */
    public get leftMiddleIntermediate() {
        return this.getOptionalBone('leftMiddleIntermediate');
    }
    /**
     * 左中指第三指骨(Optional)
     */
    public get leftMiddleDistal() {
        return this.getOptionalBone('leftMiddleDistal');
    }
    /**
     * 左薬指第一指骨(Optional)
     */
    public get leftRingProximal() {
        return this.getOptionalBone('leftRingProximal');
    }
    /**
     * 左薬指第二指骨(Optional)
     */
    public get leftRingIntermediate() {
        return this.getOptionalBone('leftRingIntermediate');
    }
    /**
     * 左薬指第三指骨(Optional)
     */
    public get leftRingDistal() {
        return this.getOptionalBone('leftRingDistal');
    }
    /**
     * 左小指第一指骨(Optional)
     */
    public get leftLittleProximal() {
        return this.getOptionalBone('leftLittleProximal');
    }
    /**
     * 左小指第二指骨(Optional)
     */
    public get leftLittleIntermediate() {
        return this.getOptionalBone('leftLittleIntermediate');
    }
    /**
     * 左小指第三指骨(Optional)
     */
    public get leftLittleDistal() {
        return this.getOptionalBone('leftLittleDistal');
    }
    /**
     * 右親指第一指骨(Optional)
     */
    public get rightThumbProximal() {
        return this.getOptionalBone('rightThumbProximal');
    }
    /**
     * 右親指第二指骨(Optional)
     */
    public get rightThumbIntermediate() {
        return this.getOptionalBone('rightThumbIntermediate');
    }
    /**
     * 右親指第三指骨(Optional)
     */
    public get rightThumbDistal() {
        return this.getOptionalBone('rightThumbDistal');
    }
    /**
     * 右人差し指第一指骨(Optional)
     */
    public get rightIndexProximal() {
        return this.getOptionalBone('rightIndexProximal');
    }
    /**
     * 右人差し指第二指骨(Optional)
     */
    public get rightIndexIntermediate() {
        return this.getOptionalBone('rightIndexIntermediate');
    }
    /**
     * 右人差し指第三指骨(Optional)
     */
    public get rightIndexDistal() {
        return this.getOptionalBone('rightIndexDistal');
    }
    /**
     * 右中指第一指骨(Optional)
     */
    public get rightMiddleProximal() {
        return this.getOptionalBone('rightMiddleProximal');
    }
    /**
     * 右中指第二指骨(Optional)
     */
    public get rightMiddleIntermediate() {
        return this.getOptionalBone('rightMiddleIntermediate');
    }
    /**
     * 右中指第三指骨(Optional)
     */
    public get rightMiddleDistal() {
        return this.getOptionalBone('rightMiddleDistal');
    }
    /**
     * 右薬指第一指骨(Optional)
     */
    public get rightRingProximal() {
        return this.getOptionalBone('rightRingProximal');
    }
    /**
     * 右薬指第二指骨(Optional)
     */
    public get rightRingIntermediate() {
        return this.getOptionalBone('rightRingIntermediate');
    }
    /**
     * 右薬指第三指骨(Optional)
     */
    public get rightRingDistal() {
        return this.getOptionalBone('rightRingDistal');
    }
    /**
     * 右小指第一指骨(Optional)
     */
    public get rightLittleProximal() {
        return this.getOptionalBone('rightLittleProximal');
    }
    /**
     * 右小指第二指骨(Optional)
     */
    public get rightLittleIntermediate() {
        return this.getOptionalBone('rightLittleIntermediate');
    }
    /**
     * 右小指第三指骨(Optional)
     */
    public get rightLittleDistal() {
        return this.getOptionalBone('rightLittleDistal');
    }
    /**
     * 上胸(Optional)
     */
    public get upperChest() {
        return this.getOptionalBone('upperChest');
    }

    /**
     * 必須ボーンを取得する。取得出来ない場合は例外を発生する
     *
     * @throws BoneNotFoundError
     * @param name HumanoidBoneName
     */
    private getMandatoryBone(name: string): TransformNode {
        const node = this.nodeMap[name];
        if (!node) {
            throw new BoneNotFoundError(name);
        }
        return node;
    }

    /**
     * オプショナルボーンを取得する
     *
     * @param name HumanoidBoneName
     */
    private getOptionalBone(name: string): Nullable<TransformNode> {
        return (this.nodeMap && this.nodeMap[name]) || null;
    }
}
