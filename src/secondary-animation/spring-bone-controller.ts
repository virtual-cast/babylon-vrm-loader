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
    public springs: VRMSpringBone[];

    /**
     * @param ext SecondaryAnimation オブジェクト
     * @param getBone nodeIndex からボーンを取得する関数
     */
    public constructor(
        public readonly ext: IVRMSecondaryAnimation,
        getBone: getBone,
    ) {
        const colliderGroups = this.constructColliderGroups(getBone);
        this.springs = this.constructSprings(getBone, colliderGroups);
    }

    /**
     * 破棄処理
     */
    public dispose() {
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
    public async update(deltaTime: number): Promise<void> {
        const promises = this.springs.map<Promise<void>>((spring) => {
            return spring.update(deltaTime);
        });
        return Promise.all(promises).then(() => { /* Do nothing */ });
    }

    /**
     * ColliderGroups を構築
     */
    private constructColliderGroups(getBone: getBone) {
        const colliderGroups: ColliderGroup[] = [];
        this.ext.colliderGroups.forEach((colliderGroup) => {
            const bone = getBone(colliderGroup.node) as TransformNode;
            const g = new ColliderGroup(bone);
            colliderGroup.colliders.forEach((collider) => {
                g.addCollider(
                    new Vector3(collider.offset.x, collider.offset.y, collider.offset.z),
                    collider.radius,
                );
            });
            colliderGroups.push(g);
        });
        return colliderGroups;
    }

    /**
     * Spring を構築
     */
    private constructSprings(getBone: getBone, colliderGroups: ColliderGroup[]) {
        const springs: VRMSpringBone[] = [];
        this.ext.boneGroups.forEach((spring) => {
            const bones = spring.bones.map((bone) => {
                return getBone(bone) as TransformNode;
            });
            const springColliders = spring.colliderGroups.map<ColliderGroup>((g) => {
                return colliderGroups[g];
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
                springColliders,
            ));
        });
        return springs;
    }
}
