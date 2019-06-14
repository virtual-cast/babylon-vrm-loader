import { Vector3 } from '@babylonjs/core/Maths/math';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Collider } from './collider';

export class ColliderGroup {
    public readonly colliders: Collider[] = [];

    public constructor(
        public readonly node: TransformNode,
    ) {
    }

    public addCollider(offset: Vector3, radius: number) {
        this.colliders.push(new Collider(offset, radius));
    }
}
