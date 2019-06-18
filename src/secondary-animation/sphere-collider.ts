import { Vector3 } from '@babylonjs/core/Maths/math';

/**
 * Runtime Sphere Collider
 */
export class SphereCollider {
    /**
     * @param position Absolute Collider Position
     * @param radius Collider radius
     */
    public constructor(
        public readonly position: Vector3,
        public readonly radius: number,
    ) {}
}
