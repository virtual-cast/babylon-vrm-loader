import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Color3, Vector3 } from '@babylonjs/core/Maths/math';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Nullable } from '@babylonjs/core/types';
import type { ColliderGroup } from './collider-group';
import { VRMSpringBoneLogic } from './vrm-spring-bone-logic';

/**
 * @see https://github.com/vrm-c/UniVRM/blob/master/Assets/VRM/UniVRM/Scripts/SpringBone/VRMSpringBone.cs
 */
export class VRMSpringBone {
    public verlets: VRMSpringBoneLogic[] = [];
    private activeBones: TransformNode[] = [];

    /** @hidden */
    private drawGizmo = false;

    /**
     * @see https://github.com/vrm-c/vrm-specification/tree/master/specification/0.0
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
        public readonly colliderGroups: ColliderGroup[]
    ) {
        this.activeBones = this.bones.filter((bone) => bone !== null) as TransformNode[];
        this.activeBones.forEach((bone) => {
            [bone].concat(bone.getChildTransformNodes()).forEach((b) => {
                this.verlets.push(new VRMSpringBoneLogic(this.center, this.hitRadius, b));
            });
        });

        if (this.drawGizmo) {
            this.setupGizmo();
        }
    }

    private setupGizmo() {
        this.activeBones.forEach((bone) => {
            const scene = bone.getScene();
            [bone].concat(bone.getChildTransformNodes()).forEach((b) => {
                const boneGizmo = MeshBuilder.CreateSphere(
                    b.name + '_boneGizmo',
                    {
                        segments: 6,
                        diameter: this.hitRadius * 2,
                        updatable: true,
                    },
                    scene
                );
                const mat = new StandardMaterial(b.name + '_boneGizmomat', scene);
                mat.emissiveColor = Color3.Red();
                mat.wireframe = true;
                boneGizmo.material = mat;
                boneGizmo.setParent(b);
                boneGizmo.position = Vector3.Zero();
            });
        });

        this.colliderGroups.forEach((group) => {
            const scene = group.transform.getScene();
            group.colliders.forEach((collider) => {
                const sphere = collider.sphere;
                if (!sphere.isEnabled(false)) {
                    sphere.setEnabled(true);
                    const mat = new StandardMaterial(group.transform.name + '_colliderGizmomat', scene);
                    mat.emissiveColor = Color3.Yellow();
                    mat.wireframe = true;
                    sphere.material = mat;
                }
            });
        });
    }

    /**
     * Update bones
     *
     * @param deltaTime
     */
    public async update(deltaTime: number): Promise<void> {
        const stiffness = this.stiffness * deltaTime;
        const external = this.gravityDir.scale(this.gravityPower * deltaTime);

        const promises = this.verlets.map<Promise<void>>((verlet) => {
            return new Promise<void>((resolve) => {
                verlet.update(stiffness, this.dragForce, external, this.colliderGroups);
                resolve();
            });
        });

        return Promise.all(promises).then(() => {
            /* Do Nothing */
        });
    }
}
