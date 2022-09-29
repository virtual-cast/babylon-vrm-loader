import type { Mesh } from '@babylonjs/core';
import type { Vector3 } from '@babylonjs/core/Maths/math';

/**
 * Collider
 */
export class Collider {
    /**
     * @param offset The local coordinate from the node of the collider group.
     * @param radius The radius of the collider.
     * @param sphere The spehere mesh for worldMatrix and gizmo.
     */
    public constructor(public readonly offset: Vector3, public readonly radius: number, public readonly sphere: Mesh) {}
}
