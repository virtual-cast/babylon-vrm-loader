import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Nullable } from '@babylonjs/core/types';
import { MathQuaternion } from './math-quaternion';
import { MathVector3 } from './math-vector3';
import { SphereCollider } from './sphere-collider';

/**
 * Verlet Spring Bone Logic
 */
export class VRMSpringBoneLogic {
    private readonly localRotation: Quaternion;
    private readonly parentRotation: Quaternion;
    private readonly boneAxis: Vector3;
    private readonly boneLength: number;

    private currentTail: Vector3;
    private prevTail: Vector3;

    public constructor(
        center: Nullable<TransformNode>,
        public readonly radius: number,
        public readonly transform: TransformNode,
        localChildPosition: Vector3,
    ) {
        // rotationQuaternion は optional なので、なければ初期化する
        if (!transform.rotationQuaternion) {
            transform.rotationQuaternion = transform.rotation.toQuaternion();
        }
        const parent = transform.parent as Nullable<TransformNode>;
        if (parent !== null && parent.rotationQuaternion === null) {
            parent.rotationQuaternion = parent.rotation.toQuaternion();
        }
        this.parentRotation = parent && parent.rotationQuaternion || Quaternion.Identity();

        const worldChildPosition = transform.getAbsolutePosition().add(localChildPosition);
        this.currentTail = this.getCenterTranslatedPos(center, worldChildPosition);
        this.prevTail = this.currentTail;
        this.localRotation = transform.rotationQuaternion.clone();
        this.boneAxis = Vector3.Normalize(localChildPosition);
        this.boneLength = localChildPosition.length();
    }

    public update(
        center: Nullable<TransformNode>,
        stiffnessForce: number,
        dragForce: number,
        external: Vector3,
        colliders: SphereCollider[],
    ): void {
        // ここで事前に `computeWorldMatrix` を実行する
        const absPos = this.transform.getAbsolutePosition();
        if (Number.isNaN(absPos.x)) {
            // TODO: 絶対座標を取得出来ないフレームは情報を更新しない
            return;
        }
        const currentTail = this.getCenterTranslatedWorldPos(center, this.currentTail);
        const prevTail = this.getCenterTranslatedWorldPos(center, this.prevTail);

        // verlet 積分で次の位置を計算
        let nextTail = currentTail;
        {
            // 減衰付きで前のフレームの移動を継続
            const attenuation = 1.0 - dragForce;
            const delta = MathVector3.multiplyByFloat(currentTail.subtract(prevTail), attenuation);
            nextTail.addInPlace(delta);
        }
        {
            // 親の回転による子ボーンの移動目標
            const rotation = this.parentRotation.multiply(this.localRotation); // parentRotation * localRotation
            const rotatedVec = MathQuaternion.multiplyWithVector3(rotation, this.boneAxis); // rotation * boneAxis
            const stiffedVec = MathVector3.multiplyByFloat(rotatedVec, stiffnessForce); // rotatedVec * stiffnessForce
            nextTail.addInPlace(stiffedVec); // nextTail + stiffedVec
        }
        {
            // 外力による移動量
            nextTail.addInPlace(external);
        }

        {
            // 長さを boneLength に強制
            const normalized = nextTail.subtract(absPos).normalize();
            nextTail = absPos.add(MathVector3.multiplyByFloat(normalized, this.boneLength));
        }

        {
            // Collision で移動
            nextTail = this.collide(colliders, nextTail);
        }

        this.prevTail = this.getCenterTranslatedPos(center, currentTail);
        this.currentTail = this.getCenterTranslatedPos(center, nextTail);

        // 回転を適用
        this.transform.rotationQuaternion = this.transformToRotation(nextTail);
    }

    private getCenterTranslatedWorldPos(center: Nullable<TransformNode>, pos: Vector3): Vector3 {
        if (center !== null) {
            return center.getAbsolutePosition().add(pos);
        }
        return pos;
    }

    private getCenterTranslatedPos(center: Nullable<TransformNode>, pos: Vector3): Vector3 {
        if (center !== null) {
            return center.position.add(pos);
        }
        return pos;
    }

    /**
     * 次のテールの位置情報から回転情報を生成する
     *
     * @see https://stackoverflow.com/questions/51549366/what-is-the-math-behind-fromtorotation-unity3d
     */
    private transformToRotation(nextTail: Vector3): Quaternion {
        const rotation = this.parentRotation.multiply(this.localRotation);
        const fromAxis = MathQuaternion.multiplyWithVector3(rotation, this.boneAxis);
        const toAxis = nextTail.subtract(this.transform.absolutePosition).normalize();
        const result = MathQuaternion.fromToRotation(fromAxis, toAxis);
        return result.multiplyInPlace(rotation);
    }

    /**
     * 衝突判定を行う
     * @param colliders SphereColliders
     * @param nextTail NextTail
     */
    private collide(colliders: SphereCollider[], nextTail: Vector3): Vector3 {
        // TODO
        return nextTail;
    }
}
