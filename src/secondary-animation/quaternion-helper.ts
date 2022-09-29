import type { Quaternion } from '@babylonjs/core/Maths/math';
import { Vector3 } from '@babylonjs/core/Maths/math';

const _v3from = new Vector3();
const _v3to = new Vector3();

/**
 * Quaternion Helper
 */
export class QuaternionHelper {
    /**
     * Creates a rotation which rotates from fromDirection to toDirection.
     *
     * @todo After upgrading babylon.js, use Quaternion.FromUnitVectorsToRef.
     * @see https://github.com/BabylonJS/Babylon.js/blob/2dbaeaa9761c42b7e39caddf494b920cdcdd2807/packages/dev/core/src/Maths/math.vector.ts#L4149-L4164
     */
    public static fromToRotationToRef(from: Vector3, to: Vector3, result: Quaternion) {
        from.normalizeToRef(_v3from);
        to.normalizeToRef(_v3to);
        const r = Vector3.Dot(_v3from, _v3to) + 1;
        if (r < 0.001) {
            if (Math.abs(_v3from.x) > Math.abs(_v3from.z)) {
                result.set(-_v3from.y, _v3from.x, 0, 0);
            } else {
                result.set(0, -_v3from.z, _v3from.y, 0);
            }
        } else {
            Vector3.CrossToRef(_v3from, _v3to, _v3to);
            result.set(_v3to.x, _v3to.y, _v3to.z, r);
        }

        result.normalize();
    }
}
