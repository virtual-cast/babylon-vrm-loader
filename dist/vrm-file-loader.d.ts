import { GLTFFileLoader } from '@babylonjs/loaders/glTF/glTFFileLoader';
/**
 * VRM/VCI ファイルを読み込めるようにする
 * 拡張子を変更しただけ
 */
export declare class VRMFileLoader extends GLTFFileLoader {
    name: string;
    extensions: {
        '.vrm': {
            isBinary: boolean;
        };
        '.vci': {
            isBinary: boolean;
        };
    };
    createPlugin(): VRMFileLoader;
}
