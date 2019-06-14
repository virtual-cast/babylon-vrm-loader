import { Vector3 } from '@babylonjs/core/Maths/math';

export class SphereCollider {
    public constructor(
        public readonly position: Vector3,
        public readonly radius: number,
    ) {}
}
