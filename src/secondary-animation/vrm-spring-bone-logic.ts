import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Nullable } from '@babylonjs/core/types';
import type { ColliderGroup } from './collider-group';
// based on
// http://rocketjump.skr.jp/unity3d/109/
// https://github.com/dwango/UniVRM/blob/master/Scripts/SpringBone/VRMSpringBone.cs
// https://github.com/pixiv/three-vrm/blob/aad551e041fad553c19d2091e5f5eaff1eb8faa8/packages/three-vrm/src/springbone/VRMSpringBone.ts

const IDENTITY_MATRIX = Matrix.Identity();

const _v3A = new Vector3();
const _v3B = new Vector3();
const _v3C = new Vector3();
const _quatA = new Quaternion();
const _matA = new Matrix();
const _matB = new Matrix();

/**
 * Verlet Spring Bone
 */
export class VRMSpringBoneLogic {
    /**
     * initial local transform Marix
     */
    private readonly initialLocalMatrix: Matrix;
    /**
     * Cloned initial local rotation
     */
    private readonly initialLocalRotation: Quaternion;
    /**
     * Cloned initial local child position
     */
    private readonly initialLocalChildPosition: Vector3;

    /**
     * Length of the bone in relative space unit.
     */
    private readonly centerSpaceBoneLength: number;
    /**
     * Position of the bone in relative space unit.
     */
    private readonly centerSpacePosition: Vector3;
    /**
     * Reference of parent rotation
     */
    private readonly boneAxis: Vector3;

    private currentTail: Vector3 = new Vector3();
    private prevTail: Vector3 = new Vector3();
    private nextTail: Vector3 = new Vector3();

    /**
     * @param center Center reference of TransformNode
     * @param radius Collision Radius
     * @param transform Base TransformNode
     */
    public constructor(public readonly center: Nullable<TransformNode>, public readonly radius: number, public readonly transform: TransformNode) {
        // Initialize rotationQuaternion when not initialized
        if (!transform.rotationQuaternion) {
            transform.rotationQuaternion = transform.rotation.toQuaternion();
        }

        const worldMatrix = transform.getWorldMatrix();
        this.centerSpacePosition = worldMatrix.getTranslation();

        this.initialLocalMatrix = transform._localMatrix.clone();
        this.initialLocalRotation = transform.rotationQuaternion.clone();

        const children = transform.getChildTransformNodes(true);
        if (children.length === 0) {
            this.initialLocalChildPosition = transform.position.clone().normalize().scaleInPlace(0.07);
        } else {
            this.initialLocalChildPosition = children[0].position.clone();
        }

        Vector3.TransformCoordinatesToRef(this.initialLocalChildPosition, worldMatrix, this.currentTail);
        this.prevTail.copyFrom(this.currentTail);
        this.nextTail.copyFrom(this.currentTail);

        this.boneAxis = this.initialLocalChildPosition.normalizeToNew();
        Vector3.TransformCoordinatesToRef(this.initialLocalChildPosition, worldMatrix, _v3A);
        this.centerSpaceBoneLength = _v3A.subtractInPlace(this.centerSpacePosition).length();

        if (center) {
            this.getMatrixWorldToCenter(_matA);

            Vector3.TransformCoordinatesToRef(this.currentTail, _matA, this.currentTail);
            Vector3.TransformCoordinatesToRef(this.prevTail, _matA, this.prevTail);
            Vector3.TransformCoordinatesToRef(this.nextTail, _matA, this.nextTail);

            worldMatrix.multiplyToRef(_matA, _matA);

            _matA.getTranslationToRef(this.centerSpacePosition);

            Vector3.TransformCoordinatesToRef(this.initialLocalChildPosition, _matA, _v3A);
            this.centerSpaceBoneLength = _v3A.subtractInPlace(this.centerSpacePosition).length();
        }
    }

    /**
     * Update Tail position
     *
     * @param stiffnessForce Current frame stiffness
     * @param dragForce Current frame drag force
     * @param external Current frame external force
     * @param colliderGroups Current frame colliderGroups
     */
    public update(stiffnessForce: number, dragForce: number, external: Vector3, colliderGroups: ColliderGroup[]): void {
        if (Number.isNaN(this.transform.getAbsolutePosition().x)) {
            // Do not update when absolute position is invalid
            return;
        }

        // Get bone position in center space
        this.getMatrixWorldToCenter(_matA);
        this.transform.getWorldMatrix().multiplyToRef(_matA, _matA);
        _matA.getTranslationToRef(this.centerSpacePosition);

        // Get parent position in center space
        this.getMatrixWorldToCenter(_matB);
        this.getParentMatrixWorld().multiplyToRef(_matB, _matB);

        // verlet積分で次の位置を計算
        this.nextTail.copyFrom(this.currentTail);
        {
            // 減衰付きで前のフレームの移動を継続
            _v3A.copyFrom(this.currentTail)
                .subtractInPlace(this.prevTail)
                .scaleInPlace(1.0 - dragForce);
            this.nextTail.addInPlace(_v3A);
        }
        {
            // 親の回転による子ボーンの移動目標
            _v3A.copyFrom(this.boneAxis);
            Vector3.TransformCoordinatesToRef(_v3A, this.initialLocalMatrix, _v3A);
            Vector3.TransformCoordinatesToRef(_v3A, _matB, _v3A);
            _v3A.subtractInPlace(this.centerSpacePosition).normalize().scaleInPlace(stiffnessForce);
            this.nextTail.addInPlace(_v3A);
        }
        {
            // 外力による移動量
            this.nextTail.addInPlace(external);
        }
        {
            // 長さを boneLength に強制
            this.nextTail.subtractInPlace(this.centerSpacePosition).normalize().scaleInPlace(this.centerSpaceBoneLength).addInPlace(this.centerSpacePosition);
        }
        {
            // Collision で移動
            this.collide(colliderGroups, this.nextTail);
        }

        this.prevTail.copyFrom(this.currentTail);
        this.currentTail.copyFrom(this.nextTail);

        this.initialLocalMatrix.multiplyToRef(_matB, _matA);
        const initialCenterSpaceMatrixInv = _matA.invert();
        Vector3.TransformCoordinatesToRef(this.nextTail, initialCenterSpaceMatrixInv, _v3A);
        _v3A.normalizeToRef(_v3B);
        Quaternion.FromUnitVectorsToRef(this.boneAxis, _v3B, _quatA);
        const applyRotation = _quatA;
        this.initialLocalRotation.multiplyToRef(applyRotation, this.transform.rotationQuaternion!);

        // update WorldMatrix
        this.transform.computeWorldMatrix(true);
    }

    /**
     * Create a matrix that converts world space into center space.
     * @param result Target matrix
     */
    private getMatrixWorldToCenter(result: Matrix): Matrix {
        if (this.center) {
            this.center.getWorldMatrix().invertToRef(result);
        } else {
            result.copyFrom(IDENTITY_MATRIX);
        }
        return result;
    }

    /**
     * Returns the world matrix of its parent object.
     */
    private getParentMatrixWorld(): Matrix {
        return this.transform.parent ? (this.transform.parent as TransformNode).getWorldMatrix() : IDENTITY_MATRIX;
    }

    /**
     * 衝突判定を行う
     * @param colliderGroups
     * @param tail
     */
    private collide(colliderGroups: ColliderGroup[], tail: Vector3) {
        colliderGroups.forEach((colliderGroup) => {
            colliderGroup.colliders.forEach((collider) => {
                this.getMatrixWorldToCenter(_matA);
                collider.sphere.computeWorldMatrix().multiplyToRef(_matA, _matA);
                _matA.getTranslationToRef(_v3A);
                const colliderCenterSpacePosition = _v3A;

                let maxAbsScale = 0;
                collider.sphere.absoluteScaling.asArray().forEach((s) => {
                    maxAbsScale = Math.max(maxAbsScale, Math.abs(s));
                });
                const colliderRadius = collider.radius * maxAbsScale;
                const r = this.radius + colliderRadius;

                tail.subtractToRef(colliderCenterSpacePosition, _v3B);
                if (_v3B.lengthSquared() <= r * r) {
                    const normal = _v3B.copyFrom(tail).subtractInPlace(colliderCenterSpacePosition).normalize();
                    const posFromCollider = _v3C.copyFrom(colliderCenterSpacePosition).addInPlace(normal.scaleInPlace(r));

                    tail.copyFrom(
                        posFromCollider.subtractInPlace(this.centerSpacePosition).normalize().scaleInPlace(this.centerSpaceBoneLength).addInPlace(this.centerSpacePosition)
                    );
                }
            });
        });
    }
}
