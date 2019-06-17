import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Nullable } from '@babylonjs/core/types';
import { MathVector3 } from './math-vector3';
import { SphereCollider } from './sphere-collider';
import { VRMSpringBoneLogic } from './vrm-spring-bone-logic';
import { ColliderGroup } from './collider-group';

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
        public readonly colliderGroups: ColliderGroup[],
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

    public async update(deltaTime: number): Promise<void> {
        if (this.verlets.length === 0) {
            if (this.activeBones.length === 0) {
                return;
            }
            this.setup();
        }

        const colliderList: SphereCollider[] = [];
        this.colliderGroups.forEach((group) => {
            if (!group) {
                return;
            }
            const position = group.node.getAbsolutePosition();
            if (Number.isNaN(position.x)) {
                return;
            }
            group.colliders.forEach((collider) => {
                colliderList.push(new SphereCollider(
                    position.add(collider.offset),
                    collider.radius,
                ));
            });
        });

        const stiffness = this.stiffness * deltaTime;
        const external = MathVector3.multiplyByFloat(this.gravityDir, this.gravityPower * deltaTime);

        const promises = this.verlets.map<Promise<void>>((verlet) => {
            return new Promise<void>((resolve) => {
                verlet.update(
                    this.center,
                    stiffness,
                    this.dragForce,
                    external,
                    colliderList,
                );
                resolve();
            });
        });

        return Promise.all(promises).then(() => { /* Do Nothing */ });
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
