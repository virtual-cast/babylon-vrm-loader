import { Vector3 } from '@babylonjs/core/Maths/math';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Nullable } from '@babylonjs/core/types';
import { IVRMSecondaryAnimation } from '../vrm-interfaces';
import { ColliderGroup } from './collider-group';
import { VRMSpringBone } from './vrm-spring-bone';

/**
 * nodeIndex からボーンを取得する関数
 */
type getBone = (nodeIndex: number) => Nullable<TransformNode>;

/**
 * VRM SpringBone Controller
 */
export class SpringBoneController {
    public colliderGroups: ColliderGroup[];
    public springs: VRMSpringBone[];

    /**
     * @param ext SecondaryAnimation オブジェクト
     * @param getBone nodeIndex からボーンを取得する関数
     */
    public constructor(
        public readonly ext: IVRMSecondaryAnimation,
        getBone: getBone,
    ) {
        this.springs = this.constructSprings(getBone);
    }

    /**
     * 破棄処理
     */
    public dispose() {
        this.colliderGroups = [];
        this.springs = [];
    }

    /**
     * 全ての Spring を初期状態にする
     */
    public setup(force = false) {
        this.springs.forEach((spring) => {
            spring.setup(force);
        });
    }

    /**
     * 全ての Spring を更新する
     *
     * @param deltaTime 前フレームからの経過時間(sec) Unity の Time.deltaTime と同義
     * @see https://docs.unity3d.com/ScriptReference/Time-deltaTime.html
     */
    public update(deltaTime: number) {
        // TODO: ColliderGroups

        this.springs.forEach((spring) => {
            spring.update(deltaTime);
        });
    }

    /**
     * Spring を構築
     */
    private constructSprings(getBone: getBone) {
        const springs: VRMSpringBone[] = [];
        this.ext.boneGroups.forEach((spring) => {
            const bones = spring.bones.map((bone) => {
                return getBone(bone) as TransformNode;
            });
            springs.push(new VRMSpringBone(
                spring.comment,
                spring.stiffiness,
                spring.gravityPower,
                new Vector3(
                    spring.gravityDir.x,
                    spring.gravityDir.y,
                    spring.gravityDir.z,
                ).normalize(),
                spring.dragForce,
                getBone(spring.center),
                spring.hitRadius,
                bones,
                [], // TODO: ColliderGroups
            ));
        });
        return springs;
    }
}
