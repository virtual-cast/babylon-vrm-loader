import { Vector3 } from "@babylonjs/core/Maths/math";

/**
 * Vector3 Helper
 */
export class MathVector3 {
    /**
     * Vector3 * float
     *
     * @param original
     * @param amount
     */
    public static multiplyByFloat(original: Vector3, amount: number): Vector3 {
        return new Vector3(
            original.x * amount,
            original.y * amount,
            original.z * amount,
        );
    }
}
