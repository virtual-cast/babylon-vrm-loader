/**
 * Throws when mandatory bone could not find
 */
export class BoneNotFoundError extends Error {
    public readonly name = 'BoneNotFoundError';

    public constructor(public readonly boneName: string) {
        super(`Bone:${boneName} NotFound`);
    }
}
