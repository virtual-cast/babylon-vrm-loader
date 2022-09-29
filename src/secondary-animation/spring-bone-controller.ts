import { Vector3 } from '@babylonjs/core/Maths/math';
import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Nullable } from '@babylonjs/core/types';
import type { IVRMSecondaryAnimation } from '../vrm-interfaces';
import { ColliderGroup } from './collider-group';
import { VRMSpringBone } from './vrm-spring-bone';

/**
 * function to get bone from nodeIndex
 */
type getBone = (nodeIndex: number) => Nullable<TransformNode>;

/**
 * VRM SpringBone Controller
 */
export class SpringBoneController {
    /**
     * Spring Bone List
     */
    private springs: VRMSpringBone[];

    /**
     * @param ext SecondaryAnimation Object
     * @param getBone
     */
    public constructor(public readonly ext: IVRMSecondaryAnimation, getBone: getBone) {
        const colliderGroups = this.constructColliderGroups(getBone);
        this.springs = this.constructSprings(getBone, colliderGroups);
    }

    public dispose() {
        this.springs = [];
    }

    /**
     * Update all SpringBones
     *
     * @param deltaTime Elapsed sec from previous frame
     * @see https://docs.unity3d.com/ScriptReference/Time-deltaTime.html
     */
    public async update(deltaTime: number): Promise<void> {
        // ポーズ後のあらぶり防止のため clamp
        deltaTime = Math.max(0.0, Math.min(16.666, deltaTime)) / 1000;
        const promises = this.springs.map<Promise<void>>((spring) => {
            return spring.update(deltaTime);
        });
        return Promise.all(promises).then(() => {
            /* Do nothing */
        });
    }

    private constructColliderGroups(getBone: getBone) {
        if (!this.ext.colliderGroups || !this.ext.colliderGroups.length) {
            return [];
        }
        const colliderGroups: ColliderGroup[] = [];
        this.ext.colliderGroups.forEach((colliderGroup) => {
            const bone = getBone(colliderGroup.node) as TransformNode;
            const g = new ColliderGroup(bone);
            colliderGroup.colliders.forEach((collider) => {
                g.addCollider(
                    // VRM 右手系Y_UP, -Z_Front から Babylon.js 左手系Y_UP, +Z_Front にする
                    new Vector3(-collider.offset.x, collider.offset.y, -collider.offset.z),
                    collider.radius
                );
            });
            colliderGroups.push(g);
        });
        return colliderGroups;
    }

    private constructSprings(getBone: getBone, colliderGroups: ColliderGroup[]) {
        if (!this.ext.boneGroups || !this.ext.boneGroups.length) {
            return [];
        }
        const springs: VRMSpringBone[] = [];
        this.ext.boneGroups.forEach((spring) => {
            const rootBones = (spring.bones || []).map((bone) => {
                return getBone(bone) as TransformNode;
            });
            const springColliders = (spring.colliderGroups || []).map<ColliderGroup>((g) => {
                return colliderGroups[g];
            });
            springs.push(
                new VRMSpringBone(
                    spring.comment,
                    spring.stiffiness,
                    spring.gravityPower,
                    new Vector3(
                        // VRM 右手系Y_UP, -Z_Front から Babylon.js 左手系Y_UP, +Z_Front にする
                        -spring.gravityDir.x,
                        spring.gravityDir.y,
                        -spring.gravityDir.z
                    ).normalize(),
                    spring.dragForce,
                    getBone(spring.center),
                    spring.hitRadius,
                    rootBones,
                    springColliders
                )
            );
        });
        return springs;
    }
}
