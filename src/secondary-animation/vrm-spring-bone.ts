import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Color3, Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Nullable } from '@babylonjs/core/types';
import { ColliderGroup } from './collider-group';
import { SphereCollider } from './sphere-collider';
import { Vector3Helper } from './vector3-helper';
import { VRMSpringBoneLogic } from './vrm-spring-bone-logic';

/**
 * @see https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/UniVRM/Scripts/SpringBone/VRMSpringBone.cs
 */
export class VRMSpringBone {
    public verlets: VRMSpringBoneLogic[] = [];
    private initialLocalRotations: Quaternion[] = [];
    private activeBones: TransformNode[] = [];

    /** @hidden */
    private drawGizmo = false;
    private boneGizmoList: Mesh[] = [];
    private colliderGizmoList: Mesh[] = [];

    /**
     * @see https://vrm.dev/en/vrm_spec/
     * @param comment Annotation comment
     * @param stiffness The resilience of the swaying object (the power of returning to the initial pose).
     * @param gravityPower The strength of gravity.
     * @param gravityDir The direction of gravity. Set (0, -1, 0) for simulating the gravity. Set (1, 0, 0) for simulating the wind.
     * @param dragForce The resistance (deceleration) of automatic animation.
     * @param center The reference point of a swaying object can be set at any location except the origin.
     *               When implementing UI moving with warp,
     *               the parent node to move with warp can be specified if you don't want to make the object swaying with warp movement.
     * @param hitRadius The radius of the sphere used for the collision detection with colliders.
     * @param bones Specify the node index of the root bone of the swaying object.
     * @param colliderGroups Specify the index of the collider group for collisions with swaying objects.
     */
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
            bone.rotationQuaternion = bone.rotationQuaternion || bone.rotation.toQuaternion();
            this.initialLocalRotations.push(bone.rotationQuaternion.clone());
        });
    }

    /**
     * Initialize bones
     *
     * @param force Force reset rotation
     */
    public setup(force = false): void {
        if (!force) {
            this.activeBones.forEach((bone, index) => {
                bone.rotationQuaternion = this.initialLocalRotations[index]!.clone();
            });
        }
        this.verlets = [];

        this.activeBones.forEach((bone, index) => {
            this.initialLocalRotations[index]! = bone.rotationQuaternion!;

            this.setupRecursive(this.center, bone);
        });
    }

    /**
     * Update bones
     *
     * @param deltaTime
     */
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
                        const mesh = MeshBuilder.CreateSphere(`${group.transform.name}_colliderGizmo`, {
                            segments: 8,
                            diameter: 1,
                            updatable: true,
                        }, group.transform.getScene());
                        const mat = new StandardMaterial(group.transform.name + '_colliderGizmomat', group.transform.getScene());
                        mat.emissiveColor = Color3.Yellow();
                        mat.wireframe = true;
                        mesh.material = mat;
                        this.colliderGizmoList.push(mesh);
                    }
                    this.colliderGizmoList[colliderList.length - 1].position = pos;
                    this.colliderGizmoList[colliderList.length - 1].scaling = new Vector3(collider.radius * 2, collider.radius * 2, collider.radius * 2);
                }
            });
        });

        const stiffness = this.stiffness * deltaTime;
        const external = Vector3Helper.multiplyByFloat(this.gravityDir, this.gravityPower * deltaTime);

        const promises = this.verlets.map<Promise<void>>((verlet, index) => {
            return new Promise<void>((resolve) => {
                verlet.update(
                    this.center,
                    stiffness,
                    this.dragForce,
                    external,
                    colliderList,
                );
                if (this.drawGizmo && this.boneGizmoList[index]) {
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
            // Leaf
            const ancestor = parent.parent as TransformNode;
            const delta = parent.getAbsolutePosition().subtract(ancestor.getAbsolutePosition()).normalize();
            const childPosition = parent.position.add(Vector3Helper.multiplyByFloat(delta, 0.07));
            this.verlets.push(new VRMSpringBoneLogic(
                center,
                this.hitRadius,
                parent,
                childPosition,
            ));
        } else {
            // Not leaf
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
            const boneGizmo = MeshBuilder.CreateSphere(parent.name + '_boneGizmo', {
                segments: 8,
                diameter: this.hitRadius * 2,
                updatable: true,
            }, parent.getScene());
            const mat = new StandardMaterial(parent.name + '_boneGizmomat', parent.getScene());
            mat.emissiveColor = Color3.Red();
            mat.wireframe = true;
            boneGizmo.material = mat;
            this.boneGizmoList.push(boneGizmo);
        }

        parent.getChildTransformNodes().forEach((child) => {
            this.setupRecursive(center, child);
        });
    }
}
