import type { Vector3 } from '@babylonjs/core/Maths/math';
import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { SphereBuilder } from '@babylonjs/core/Meshes/Builders/sphereBuilder';
import { Collider } from './collider';

/**
 * VRM SpringBone ColliderGroup
 */
export class ColliderGroup {
    public readonly colliders: Collider[] = [];

    /**
     * @param transform The node of the collider group for setting up collision detections.
     */
    public constructor(public readonly transform: TransformNode) {}

    /**
     * Add offsetted collider
     *
     * @param offset The local coordinate from the node of the collider group.
     * @param radius The radius of the collider.
     */
    public addCollider(offset: Vector3, radius: number) {
        const sphere = SphereBuilder.CreateSphere(
            `${this.transform.name}_ColliderSphere`,
            {
                segments: 6,
                diameter: radius * 2.0,
                updatable: true,
            },
            this.transform.getScene()
        );
        sphere.setParent(this.transform);
        sphere.setPositionWithLocalVector(offset);
        sphere.setEnabled(false);

        this.colliders.push(new Collider(offset, radius, sphere));
    }
}
