import { Vector3 } from '@babylonjs/core/Maths/math';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Collider } from './collider';

/**
 * VRM SpringBone ColliderGroup
 */
export class ColliderGroup {
    public readonly colliders: Collider[] = [];

    /**
     * @param transform The node of the collider group for setting up collision detections.
     */
    public constructor(
        public readonly transform: TransformNode,
    ) {
    }

    /**
     * Add offsetted collider
     *
     * @param offset The local coordinate from the node of the collider group.
     * @param radius The radius of the collider.
     */
    public addCollider(offset: Vector3, radius: number) {
        this.colliders.push(new Collider(offset, radius));
    }
}
