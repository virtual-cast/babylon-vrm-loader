import { Vector3 } from '@babylonjs/core/Maths/math';

export class Collider {
    public constructor(
        public readonly offset: Vector3,
        public readonly radius: number,
    ) {
    }
}
