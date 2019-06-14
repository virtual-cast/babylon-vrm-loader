import { Vector3 } from '@babylonjs/core/Maths/math';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { MorphTarget } from '@babylonjs/core/Morph/morphTarget';
import { Scene } from '@babylonjs/core/scene';
import { Nullable } from '@babylonjs/core/types';
import { SpringBoneController } from './secondary-animation/spring-bone-controller';
import { IVRM } from './vrm-interfaces';

interface MorphTargetSetting {
    target: MorphTarget;
    weight: number;
}

interface MorphTargetMap {
    [morphName: string]: MorphTargetSetting[];
}

interface TransformNodeMap {
    [humanBoneName: string]: TransformNode;
}

interface TransformNodeCache {
    [nodeIndex: number]: TransformNode;
}

interface MeshCache {
    [meshIndex: number]: Mesh;
}

/**
 * Unity Humanoid Bone 名
 */
export type HumanBoneName = 'hips' | 'leftUpperLeg' | 'rightUpperLeg' | 'leftLowerLeg' | 'rightLowerLeg' | 'leftFoot' | 'rightFoot' | 'spine' | 'chest' | 'neck' | 'head' | 'leftShoulder' | 'rightShoulder' | 'leftUpperArm' | 'rightUpperArm' | 'leftLowerArm' | 'rightLowerArm' | 'leftHand' | 'rightHand' | 'leftToes' | 'rightToes' | 'leftEye' | 'rightEye' | 'jaw' | 'leftThumbProximal' | 'leftThumbIntermediate' | 'leftThumbDistal' | 'leftIndexProximal' | 'leftIndexIntermediate' | 'leftIndexDistal' | 'leftMiddleProximal' | 'leftMiddleIntermediate' | 'leftMiddleDistal' | 'leftRingProximal' | 'leftRingIntermediate' | 'leftRingDistal' | 'leftLittleProximal' | 'leftLittleIntermediate' | 'leftLittleDistal' | 'rightThumbProximal' | 'rightThumbIntermediate' | 'rightThumbDistal' | 'rightIndexProximal' | 'rightIndexIntermediate' | 'rightIndexDistal' | 'rightMiddleProximal' | 'rightMiddleIntermediate' | 'rightMiddleDistal' | 'rightRingProximal' | 'rightRingIntermediate' | 'rightRingDistal' | 'rightLittleProximal' | 'rightLittleIntermediate' | 'rightLittleDistal' | 'upperChest' | string;

/**
 * VRM キャラクターを動作させるためのマネージャ
 */
export class VRMManager {
    private morphTargetMap: MorphTargetMap = {};
    private presetMorphTargetMap: MorphTargetMap = {};
    private transformNodeMap: TransformNodeMap = {};
    private transformNodeCache: TransformNodeCache = {};
    private meshCache: MeshCache = {};

    /**
     * Secondary Animation として定義されている VRM Spring Bone のコントローラ
     */
    public readonly springBoneController: SpringBoneController;

    /**
     *
     * @param ext glTF.extensions.VRM の中身 json
     * @param scene
     * @param meshesFrom この番号以降のメッシュがこの VRM に該当する
     * @param transformNodesFrom この番号以降の TransformNode がこの VRM に該当する
     */
    public constructor(
        public readonly ext: IVRM,
        public readonly scene: Scene,
        private readonly meshesFrom: number,
        private readonly transformNodesFrom: number,
    ) {
        this.meshCache = this.constructMeshCache();
        this.transformNodeCache = this.constructTransformNodeCache();
        this.springBoneController = new SpringBoneController(
            this.ext.secondaryAnimation,
            this.findTransformNode.bind(this),
        );
        this.springBoneController.setup();

        this.constructMorphTargetMap();
        this.constructTransformNodeMap();
    }

    /**
     * Secondary Animation を更新する
     *
     * @param deltaTime 前フレームからの経過秒数(sec)
     */
    public update(deltaTime: number): void {
        this.springBoneController.update(deltaTime);
    }

    /**
     * 破棄処理
     */
    public dispose(): void {
        this.morphTargetMap = {};
        this.presetMorphTargetMap = {};
        this.transformNodeMap = {};
        this.transformNodeCache = {};
        this.meshCache = {};

        this.springBoneController.dispose();
    }

    /**
     * モーフィングを行う
     * @param label モーフ名
     * @param value 値(0〜1)
     */
    public morphing(label: string, value: number): void {
        if (!this.morphTargetMap[label]) {
            throw new Error(`Unknown morph label ${label}`);
        }
        this.morphTargetMap[label].forEach((setting) => {
            setting.target.influence = Math.max(0, Math.min(1, value)) * (setting.weight / 100);
        });
    }

    /**
     * プリセットモーフのモーフィングを行う
     * @param label モーフ名
     * @param value 値(0〜1)
     */
    public morphingPreset(label: string, value: number): void {
        if (!this.presetMorphTargetMap[label]) {
            throw new Error(`Unknown preset morph label ${label}`);
        }
        this.presetMorphTargetMap[label].forEach((setting) => {
            setting.target.influence = Math.max(0, Math.min(1, value)) * (setting.weight / 100);
        });
    }

    /**
     * 一人称時のカメラ位置を絶対座標として取得する
     *
     * firstPersonBone が未設定の場合は null を返す
     *
     * @returns 一人称時のカメラの現在における絶対座標
     */
    public getFirstPersonCameraPosition(): Nullable<Vector3> {
        const firstPersonBone = this.getFirstPersonBone();
        if (!firstPersonBone) {
            return null;
        }

        let basePos = firstPersonBone.getAbsolutePosition();
        const offsetPos = this.ext.firstPerson.firstPersonBoneOffset;
        return new Vector3(
            basePos.x + offsetPos.x,
            basePos.y + offsetPos.y,
            basePos.z + offsetPos.z,
        );
    }

    /**
     * 一人称時に頭とみなす TransformNode を取得する
     */
    public getFirstPersonBone(): Nullable<TransformNode> {
        return this.findTransformNode(this.ext.firstPerson.firstPersonBone) || null;
    }

    /**
     * ボーン名からそのボーンに該当する TransformNode を取得する
     * @param name HumanBoneName
     */
    public getBone(name: HumanBoneName): Nullable<TransformNode> {
        return this.transformNodeMap[name] || null;
    }

    /**
     * node 番号から該当する TransformNode を探す
     * 数が多くなるのでキャッシュに参照を持つ構造にする
     * gltf の node 番号は `metadata.gltf.pointers` に記録されている
     * @param nodeIndex
     */
    public findTransformNode(nodeIndex: number): Nullable<TransformNode> {
        return this.transformNodeCache[nodeIndex] || null;
    }

    /**
     * mesh 番号からメッシュを探す
     * gltf の mesh 番号は `metadata.gltf.pointers` に記録されている
     */
    public findMesh(meshIndex: number): Nullable<Mesh> {
        return this.meshCache[meshIndex] || null;
    }

    /**
     * 事前に MorphTarget と BlendShape を紐付ける
     */
    private constructMorphTargetMap(): void {
        if (!this.ext.blendShapeMaster || !this.ext.blendShapeMaster.blendShapeGroups) {
            return;
        }
        this.ext.blendShapeMaster.blendShapeGroups.forEach((g) => {
            if (!g.binds) {
                return;
            }
            g.binds.forEach((b) => {
                const mesh = this.findMesh(b.mesh);
                if (!mesh) {
                    console.log(`Undefined BlendShapeBind Mesh`, b);
                    return;
                }
                const morphTargetManager = mesh.morphTargetManager;
                if (!morphTargetManager) {
                    console.log(`Undefined morphTargetManager`, b);
                    return;
                }
                const target = morphTargetManager.getTarget(b.index);
                this.morphTargetMap[g.name] = this.morphTargetMap[g.name] || [];
                this.morphTargetMap[g.name].push({
                    target,
                    weight: b.weight,
                });
                if (g.presetName) {
                    this.presetMorphTargetMap[g.presetName] = this.morphTargetMap[g.presetName] || [];
                    this.presetMorphTargetMap[g.presetName].push({
                        target,
                        weight: b.weight,
                    });
                }
            });
            // TODO: materialValues
        });
    }

    /**
     * 事前に TransformNode と bone 名を紐づける
     */
    private constructTransformNodeMap() {
        this.ext.humanoid.humanBones.forEach((b) => {
            const node = this.findTransformNode(b.node);
            if (!node) {
                return;
            }
            this.transformNodeMap[b.bone] = node;
        });
    }

    /**
     * node 番号と TransformNode を紐づける
     */
    private constructTransformNodeCache() {
        const cache: TransformNodeCache = {};
        for (let index = this.transformNodesFrom; index < this.scene.transformNodes.length; index++) {
            const node = this.scene.transformNodes[index];
            // ポインタが登録されていないものは省略
            if (!node || !node.metadata || !node.metadata.gltf || !node.metadata.gltf.pointers || node.metadata.gltf.pointers.length === 0) {
                continue;
            }
            for (const pointer of node.metadata.gltf.pointers) {
                if (pointer.startsWith('/nodes/')) {
                    const nodeIndex = parseInt((pointer as string).substr(7), 10);
                    cache[nodeIndex] = node;
                    break;
                }
            }
        }
        return cache;
    }

    /**
     * mesh 番号と Mesh を紐づける
     */
    private constructMeshCache() {
        const cache: MeshCache = {};
        for (let index = this.meshesFrom; index < this.scene.meshes.length; index++) {
            const mesh = this.scene.meshes[index];
            // ポインタが登録されていないものは省略
            if (!mesh || !mesh.metadata || !mesh.metadata.gltf || !mesh.metadata.gltf.pointers || mesh.metadata.gltf.pointers.length === 0) {
                continue;
            }
            for (const pointer of mesh.metadata.gltf.pointers) {
                if (pointer.startsWith('/meshes/')) {
                    const nodeIndex = parseInt((pointer as string).substr(8), 10);
                    cache[nodeIndex] = mesh as Mesh;
                    break;
                }
            }
        }
        return cache;
    }
}
