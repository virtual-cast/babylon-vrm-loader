import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Nullable } from '@babylonjs/core/types';
import { MathVector3 } from './math-vector3';
import { SphereCollider } from './sphere-collider';
import { VRMSpringBoneLogic } from './vrm-spring-bone-logic';

/**
 * @see https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/UniVRM/Scripts/SpringBone/VRMSpringBone.cs
 */
export class VRMSpringBone {
    public verlets: VRMSpringBoneLogic[] = [];
    private initialLocalRotations: Array<Nullable<Quaternion>> = [];
    private activeBones: TransformNode[] = [];

    public constructor(
        public readonly comment: string,
        public readonly stiffness: number,
        public readonly gravityPower: number,
        public readonly gravityDir: Vector3,
        public readonly dragForce: number,
        public readonly center: Nullable<TransformNode>,
        public readonly hitRadius: number,
        public readonly bones: Array<Nullable<TransformNode>>,
        public readonly colliderGroups: number[],
    ) {
        this.activeBones = this.bones.filter((bone) => bone !== null) as TransformNode[];
        this.activeBones.forEach((bone) => {
            this.initialLocalRotations.push(bone.rotationQuaternion && bone.rotationQuaternion.clone() || bone.rotationQuaternion);
        });
    }

    public setup(force = false): void {
        if (!force) {
            this.activeBones.forEach((bone, index) => {
                bone.rotationQuaternion = this.initialLocalRotations[index] && this.initialLocalRotations[index]!.clone() || null;
            });
        }
        this.verlets = [];

        this.activeBones.forEach((bone) => {
            this.setupRecursive(this.center, bone);
        });
    }

    public update(deltaTime: number): void {
        if (this.verlets.length === 0) {
            if (this.activeBones.length === 0) {
                return;
            }
            this.setup();
        }

        // TODO ColliderGroups
        const colliderList: SphereCollider[] = [];

        const stiffness = this.stiffness * deltaTime;
        const external = MathVector3.multiplyByFloat(this.gravityDir, this.gravityPower * deltaTime);

        this.verlets.forEach((verlet) => {
            verlet.update(
                this.center,
                stiffness,
                this.dragForce,
                external,
                colliderList,
            );
        });
    }

    private setupRecursive(center: Nullable<TransformNode>, parent: TransformNode): void {
        if (parent.getChildTransformNodes().length === 0) {
            // 末尾
            const ancestor = parent.parent as TransformNode;
            const delta = parent.getAbsolutePosition().subtract(ancestor.getAbsolutePosition()).normalize();
            const childPosition = parent.position.add(MathVector3.multiplyByFloat(delta, 0.07));
            this.verlets.push(new VRMSpringBoneLogic(
                center,
                this.hitRadius,
                parent,
                childPosition,
            ));
        } else {
            // 末尾以外
            const firstChild = parent.getChildTransformNodes().shift()!;
            const localPosition = firstChild.position;
            const scale = firstChild.scaling;
            this.verlets.push(new VRMSpringBoneLogic(
                center,
                this.hitRadius,
                parent,
                localPosition.multiply(scale),
            ));
        }

        parent.getChildTransformNodes().forEach((child) => {
            this.setupRecursive(center, child);
        });
    }
}
