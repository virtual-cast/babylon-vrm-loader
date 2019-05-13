import { IVRM } from './vrm-interfaces';
import { Scene } from '@babylonjs/core/scene';
import { MorphTarget } from '@babylonjs/core/Morph/morphTarget';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Nullable } from '@babylonjs/core/types';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

interface MorphTargetSetting {
    target: MorphTarget;
    weight: number;
}

interface MorphTargetMap {
    [label: string]: MorphTargetSetting[];
}

interface TransformNodeMap {
    [label: string]: TransformNode;
}

interface TransformNodeCache {
    [node: number]: TransformNode;
}

export type HumanBoneName = 'hips' | 'leftUpperLeg' | 'rightUpperLeg' | 'leftLowerLeg' | 'rightLowerLeg' | 'leftFoot' | 'rightFoot' | 'spine' | 'chest' | 'neck' | 'head' | 'leftShoulder' | 'rightShoulder' | 'leftUpperArm' | 'rightUpperArm' | 'leftLowerArm' | 'rightLowerArm' | 'leftHand' | 'rightHand' | 'leftToes' | 'rightToes' | 'leftEye' | 'rightEye' | 'jaw' | 'leftThumbProximal' | 'leftThumbIntermediate' | 'leftThumbDistal' | 'leftIndexProximal' | 'leftIndexIntermediate' | 'leftIndexDistal' | 'leftMiddleProximal' | 'leftMiddleIntermediate' | 'leftMiddleDistal' | 'leftRingProximal' | 'leftRingIntermediate' | 'leftRingDistal' | 'leftLittleProximal' | 'leftLittleIntermediate' | 'leftLittleDistal' | 'rightThumbProximal' | 'rightThumbIntermediate' | 'rightThumbDistal' | 'rightIndexProximal' | 'rightIndexIntermediate' | 'rightIndexDistal' | 'rightMiddleProximal' | 'rightMiddleIntermediate' | 'rightMiddleDistal' | 'rightRingProximal' | 'rightRingIntermediate' | 'rightRingDistal' | 'rightLittleProximal' | 'rightLittleIntermediate' | 'rightLittleDistal' | 'upperChest' | string;

/**
 * VRM キャラクターを動作させるためのマネージャ
 */
export class VRMManager {
    private morphTargetMap: MorphTargetMap = {};
    private presetMorphTargetMap: MorphTargetMap = {};
    private transformNodeMap: TransformNodeMap = {};
    private transformNodeCache: Nullable<TransformNodeCache> = null;

    public constructor(
        public readonly ext: IVRM,
        public readonly scene: Scene,
        private readonly meshesFrom: number,
        private readonly transformNodesFrom: number,
    ) {
        this.constructMorphTargetMap();
        this.constructTransformNodeMap();
    }

    public dispose(): void {
        this.morphTargetMap = {};
        this.presetMorphTargetMap = {};
        this.transformNodeMap = {};
        this.transformNodeCache = null;
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
     * ボーン名からそのボーンに該当する TransformNode を取得する
     * @param name HumanBoneName
     */
    public getBone(name: HumanBoneName): Nullable<TransformNode> {
        return this.transformNodeMap[name] || null;
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
     * node 番号から該当する TransformNode を探す
     * 数が多くなるのでキャッシュに参照を持つ構造にする
     * gltf の node 番号は `metadata.gltf.pointers` に記録されている
     * @param nodeIndex
     */
    private findTransformNode(nodeIndex: number): Nullable<TransformNode> {
        if (!this.transformNodeCache) {
            this.transformNodeCache = this.scene.transformNodes.filter((n, index) => {
                return index >= this.transformNodesFrom
                    && !!n.metadata
                    && !!n.metadata.gltf
                    && !!n.metadata.gltf.pointers
                    && n.metadata.gltf.pointers.length !== 0;
            }).reduce<TransformNodeCache>((prev: TransformNodeCache, curr: TransformNode) => {
                let nodeIndex = -1;
                for (const p of curr.metadata.gltf.pointers) {
                    if (p.startsWith(`/nodes/`)) {
                        nodeIndex = parseInt((p as string).substr(7), 10);
                    }
                }
                if (nodeIndex !== -1) {
                    prev[nodeIndex] = curr;
                }
                return prev;
            }, {});
        }
        return this.transformNodeCache[nodeIndex] || null;
    }

    /**
     * mesh 番号からメッシュを探す
     * gltf の mesh 番号は `metadata.gltf.pointers` に記録されている
     */
    private findMesh(meshIndex: number): Nullable<Mesh> {
        const mesh = this.scene.meshes.find((m, index) => {
            if (index < this.meshesFrom || !m.metadata || !m.metadata.gltf || !m.metadata.gltf.pointers || m.metadata.gltf.pointers.length < 1) {
                return false;
            }
            const pointers: string[] = m.metadata.gltf.pointers;
            for (const p of pointers) {
                if (p.startsWith(`/meshes/${meshIndex}`)) {
                    return true;
                }
            }
            return false;
        });
        if (mesh) {
            return mesh as Mesh;
        }
        return null;
    }
}
