import { Quaternion, Vector3, Color3 } from '@babylonjs/core/Maths/math';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Nullable } from '@babylonjs/core/types';
import { MathVector3 } from './math-vector3';
import { SphereCollider } from './sphere-collider';
import { VRMSpringBoneLogic } from './vrm-spring-bone-logic';
import { ColliderGroup } from './collider-group';

import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';

/**
 * @see https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/UniVRM/Scripts/SpringBone/VRMSpringBone.cs
 */
export class VRMSpringBone {
    public verlets: VRMSpringBoneLogic[] = [];
    private initialLocalRotations: Array<Nullable<Quaternion>> = [];
    private activeBones: TransformNode[] = [];

    private drawGizmo = false;
    private boneGizmoList: Mesh[] = [];
    private colliderGizmoList: Mesh[] = [];

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
            const absPos = group.transform.getAbsolutePosition();
            if (Number.isNaN(absPos.x)) {
                return;
            }
            group.colliders.forEach((collider) => {
                const pos = absPos.add(collider.offset);
                colliderList.push(new SphereCollider(
                    pos,
                    collider.radius,
                ));

                if (this.drawGizmo) {
                    if (this.colliderGizmoList.length < colliderList.length) {
                        this.colliderGizmoList.push(MeshBuilder.CreateSphere(`colliderGizmo`, {
                            segments: 6,
                            diameter: collider.radius * 2,
                            updatable: true,
                        }, group.transform.getScene()));
                    }
                    this.colliderGizmoList[colliderList.length - 1].position = pos;
                }
            });
        });

        const stiffness = this.stiffness * deltaTime;
        const external = MathVector3.multiplyByFloat(this.gravityDir, this.gravityPower * deltaTime);

        const promises = this.verlets.map<Promise<void>>((verlet, index) => {
            return new Promise<void>((resolve) => {
                verlet.update(
                    this.center,
                    stiffness,
                    this.dragForce,
                    external,
                    colliderList,
                );
                if (this.drawGizmo) {
                    this.boneGizmoList[index].position = verlet.transform.absolutePosition;
                    this.boneGizmoList[index].rotationQuaternion = verlet.transform.rotationQuaternion;
                }
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

        if (this.drawGizmo) {
            const boneGizmo = MeshBuilder.CreateCylinder(parent.name + '_colliderGizmo', {
                diameter: this.hitRadius * 2,
                height: this.hitRadius * 2,
                tessellation: 6,
                updatable: true,
            });
            boneGizmo.visibility = 0.5;
            const mat = new StandardMaterial(parent.name + '_ColliderGizmomat', parent.getScene());
            mat.diffuseColor = new Color3(1, 0, 0);
            boneGizmo.material = mat;
            this.boneGizmoList.push(boneGizmo);
        }

        parent.getChildTransformNodes().forEach((child) => {
            this.setupRecursive(center, child);
        });
    }
}
