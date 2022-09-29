import type { IVRMMaterialProperty } from './vrm-interfaces';

export type IVCIVector3 = [number, number, number];

export interface IVCIColliderDetail {
    type: 'box' | string;
    center: IVCIVector3;
    shape: IVCIVector3;
    grabable: boolean;
    useGravity: boolean;
    isTrigger: boolean;
}

/**
 * meshes.extensions.VCAST_vci_collider
 */
export interface IVCICollider {
    colliders: IVCIColliderDetail[];
}

export interface IVCIRigidbodyDetail {
    mass: number;
    drag: number;
    angularDrag: number;
    useGravity: boolean;
    isKinematic: boolean;
    freezePositionX: boolean;
    freezePositionY: boolean;
    freezePositionZ: boolean;
    freezeRotationX: boolean;
    freezeRotationY: boolean;
    freezeRotationZ: boolean;
}

/**
 * meshes.extensions.VCAST_vci_rigidbody
 */
export interface IVCIRigidbody {
    rigidBodies: IVCIRigidbodyDetail[];
}

/**
 * meshes.extensions.VCAST_vci_item
 */
export interface IVCIItem {
    grabbable: boolean;
    scalable: boolean;
    uniformScaling: boolean;
    groupId: number;
}

/**
 * extensions.VCAST_vci_meta
 */
export interface IVCIMeta {
    exporterVCIVersion: string;
    specVersion: string;
    title: string;
    version: string;
    authori: string;
    contactInformation?: string;
    reference?: string;
    description?: string;
    thumbnail?: number;
    modelDataLicenseType: string;
    modelDataOtherLicenseUrl?: string;
    scriptLicenseType: string;
    scriptOtherLicenseUrl?: string;
    scriptWriteProtected: boolean;
    scriptEnableDebugging: boolean;
    scriptFormat: 'luaText' | string;
}

/**
 * extensions.VCAST_vci_embedded_script
 */
export interface IVCIEmbeddedScript {
    scripts: IVCIEmbeddedScriptDetail[];
    entryPoint: number;
}

export interface IVCIEmbeddedScriptDetail {
    name: string;
    mimeType: 'x_application_lua' | string;
    targetEngine: 'moonsharp' | string;
    source: number;
}

/**
 * extensions.VCAST_vci_material_unity
 *
 * VRM.materialProperties と同等
 */
export interface IVCIMaterialUnity {
    materials: IVRMMaterialProperty[];
}
