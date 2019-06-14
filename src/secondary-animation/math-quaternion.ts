import { Vector3, Quaternion } from "@babylonjs/core/Maths/math";

/**
 * Quaternion Helper
 */
export class MathQuaternion {
    /**
     * Rotates the point point with rotation.
     *
     * Quaternion * Vector3
     *
     * @param quat
     * @param vec
     * @see https://docs.unity3d.com/2017.4/Documentation/ScriptReference/Quaternion-operator_multiply.html
     * @see https://answers.unity.com/questions/372371/multiply-quaternion-by-vector3-how-is-done.html
     * @see https://github.com/adragonite/math3d/blob/master/src/Quaternion.js#L287
     */
    public static multiplyWithVector3(quat: Quaternion, vec: Vector3): Vector3 {
        const num = quat.x * 2;
        const num2 = quat.y * 2;
        const num3 = quat.z * 2;
        const num4 = quat.x * num;
        const num5 = quat.y * num2;
        const num6 = quat.z * num3;
        const num7 = quat.x * num2;
        const num8 = quat.x * num3;
        const num9 = quat.y * num3;
        const num10 = quat.w * num;
        const num11 = quat.w * num2;
        const num12 = quat.w * num3;
        const result = new Vector3();
        result.x = (1 - (num5 + num6)) * vec.x + (num7 - num12) * vec.y + (num8 + num11) * vec.z;
        result.y = (num7 + num12) * vec.x + (1 - (num4 + num6)) * vec.y + (num9 - num10) * vec.z;
        result.z = (num8 - num11) * vec.x + (num9 + num10) * vec.y + (1 - (num4 + num5)) * vec.z;
        return result;
    }

    /**
     * Creates a rotation which rotates from fromDirection to toDirection.
     *
     * @see https://docs.unity3d.com/2017.4/Documentation/ScriptReference/Quaternion.FromToRotation.html
     * @see https://stackoverflow.com/questions/51549366/what-is-the-math-behind-fromtorotation-unity3d
     */
    public static fromToRotation(from: Vector3, to: Vector3): Quaternion {
        const axis = Vector3.Cross(from, to).normalize();
        const a = Vector3.Dot(from, to);
        const b = from.length() * to.length();
        const phi = Math.acos((a > 0.999 ? 1 : a) / (b > 0.999 ? 1 : b));
        const sin = Math.sin(phi / 2);
        return new Quaternion(
            sin * axis.x,
            sin * axis.y,
            sin * axis.z,
            Math.cos(phi / 2),
        );
    }
}
