import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Nullable } from '@babylonjs/core/types';
import { QuaternionHelper } from './quaternion-helper';
import { SphereCollider } from './sphere-collider';
import { Vector3Helper } from './vector3-helper';

/**
 * Verlet Spring Bone Logic
 */
export class VRMSpringBoneLogic {
    /**
     * Cloned initial local rotation
     */
    private readonly localRotation: Quaternion;
    /**
     * Reference of parent rotation
     */
    private readonly parentRotation: Quaternion;
    private readonly boneAxis: Vector3;
    private readonly boneLength: number;

    private currentTail: Vector3;
    private prevTail: Vector3;

    /**
     * @param center Center reference of TransformNode
     * @param radius Collision Radius
     * @param transform Base TransformNode
     * @param localChildPosition
     */
    public constructor(
        center: Nullable<TransformNode>,
        public readonly radius: number,
        public readonly transform: TransformNode,
        localChildPosition: Vector3,
    ) {
        // Initialize rotationQuaternion when not initialized
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

    /**
     * Update Tail position
     *
     * @param center Center reference of TransformNode
     * @param stiffnessForce Current frame stiffness
     * @param dragForce Current frame drag force
     * @param external Current frame external force
     * @param colliders Current frame colliders
     */
    public update(
        center: Nullable<TransformNode>,
        stiffnessForce: number,
        dragForce: number,
        external: Vector3,
        colliders: SphereCollider[],
    ): void {
        const absPos = this.transform.getAbsolutePosition();
        if (Number.isNaN(absPos.x)) {
            // Do not update when absolute position is invalid
            return;
        }
        const currentTail = this.getCenterTranslatedWorldPos(center, this.currentTail);
        const prevTail = this.getCenterTranslatedWorldPos(center, this.prevTail);

        // verlet 積分で次の位置を計算
        let nextTail = currentTail;
        {
            // 減衰付きで前のフレームの移動を継続
            const attenuation = 1.0 - dragForce;
            const delta = Vector3Helper.multiplyByFloat(currentTail.subtract(prevTail), attenuation);
            nextTail.addInPlace(delta);
        }
        {
            // 親の回転による子ボーンの移動目標
            const rotation = this.parentRotation.multiply(this.localRotation); // parentRotation * localRotation
            const rotatedVec = QuaternionHelper.multiplyWithVector3(rotation, this.boneAxis); // rotation * boneAxis
            const stiffedVec = Vector3Helper.multiplyByFloat(rotatedVec, stiffnessForce); // rotatedVec * stiffnessForce
            nextTail.addInPlace(stiffedVec); // nextTail + stiffedVec
        }
        {
            // 外力による移動量
            nextTail.addInPlace(external);
        }

        {
            // 長さを boneLength に強制
            const normalized = nextTail.subtract(absPos).normalize();
            nextTail = absPos.add(Vector3Helper.multiplyByFloat(normalized, this.boneLength));
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
        const fromAxis = QuaternionHelper.multiplyWithVector3(rotation, this.boneAxis);
        const toAxis = nextTail.subtract(this.transform.absolutePosition).normalize();
        const result = QuaternionHelper.fromToRotation(fromAxis, toAxis);
        return result.multiplyInPlace(rotation);
    }

    /**
     * 衝突判定を行う
     * @param colliders SphereColliders
     * @param nextTail NextTail
     */
    private collide(colliders: SphereCollider[], nextTail: Vector3): Vector3 {
        colliders.forEach((collider) => {
            const r = this.radius + collider.radius;
            const axis = nextTail.subtract(collider.position);
            // 少数誤差許容のため 2 cm 判定を小さくする
            if (axis.lengthSquared() <= (r * r) - 0.02) {
                // ヒット。 Collider の半径方向に押し出す
                const posFromCollider = collider.position.add(Vector3Helper.multiplyByFloat(axis.normalize(), r));
                // 長さを boneLength に強制
                const absPos = this.transform.absolutePosition;
                nextTail = absPos.add(Vector3Helper.multiplyByFloat(posFromCollider.subtractInPlace(absPos).normalize(), this.boneLength));
            }
        });
        return nextTail;
    }
}
