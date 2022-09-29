import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Engine } from '@babylonjs/core/Engines/engine';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { PointLight } from '@babylonjs/core/Lights/pointLight';
import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator';
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Scene } from '@babylonjs/core/scene';
import type { VRMManager } from '../vrm-manager';

import '@babylonjs/core/Helpers/sceneHelpers';
import '@babylonjs/core/Meshes/Builders/sphereBuilder';
import '@babylonjs/core/Meshes/Builders/torusKnotBuilder';
import '@babylonjs/inspector';
// eslint-disable-next-line import/no-internal-modules
import '../index';

async function main() {
    const debugProperties = getDebugProperties();
    const canvas = document.getElementById('main-canvas') as HTMLCanvasElement;
    const engine = new Engine(canvas, true, {
        alpha: false,
        disableWebGL2Support: debugProperties.webgl1,
    });

    const scene = new Scene(engine);
    const camera = new ArcRotateCamera('MainCamera1', 0, 0, 3, new Vector3(0, 1.2, 0), scene, true);
    camera.lowerRadiusLimit = 0.1;
    camera.upperRadiusLimit = 20;
    camera.wheelDeltaPercentage = 0.01;
    camera.minZ = 0.3;
    camera.position = new Vector3(0, 1.2, -3);
    camera.attachControl(canvas, true);

    scene.createDefaultEnvironment({
        createGround: true,
        createSkybox: false,
        enableGroundMirror: false,
        enableGroundShadow: false,
    });

    // Lights
    const directionalLight = new DirectionalLight('DirectionalLight1', new Vector3(0, -0.5, 1.0), scene);
    directionalLight.position = new Vector3(0, 25, -50);
    directionalLight.setEnabled(true);
    const hemisphericLight = new HemisphericLight('HemisphericLight1', new Vector3(-0.2, -0.8, -1), scene);
    hemisphericLight.setEnabled(false);
    const pointLight = new PointLight('PointLight1', new Vector3(0, 0, 1), scene);
    pointLight.setEnabled(false);

    // Meshes
    const standardMaterialSphere = Mesh.CreateSphere('StandardMaterialSphere1', 16, 1, scene);
    standardMaterialSphere.position = new Vector3(1.5, 1.2, 0);
    standardMaterialSphere.receiveShadows = true;

    const shadowCaster = Mesh.CreateTorusKnot('ShadowCaster', 1, 0.2, 32, 32, 2, 3, scene);
    shadowCaster.position = new Vector3(0.0, 5.0, -10.0);
    shadowCaster.setEnabled(debugProperties.shadow);
    if (debugProperties.shadow) {
        const shadowGenerator = new ShadowGenerator(1024, directionalLight);
        shadowGenerator.addShadowCaster(shadowCaster);
    }

    if (debugProperties.inspector) {
        await scene.debugLayer.show({
            globalRoot: document.getElementById('wrapper') as HTMLElement,
        });
    }

    // Expose current scene
    (window as any).currentScene = scene;

    scene.onBeforeRenderObservable.add(() => {
        // SpringBone
        if (!scene.metadata || !scene.metadata.vrmManagers) {
            return;
        }
        const managers = scene.metadata.vrmManagers as VRMManager[];
        const deltaTime = scene.getEngine().getDeltaTime();
        managers.forEach((manager) => {
            manager.update(deltaTime);
        });
    });
    engine.runRenderLoop(() => {
        scene.render();
        shadowCaster.rotate(Vector3.Up(), 0.01);
    });
    window.addEventListener('resize', () => {
        engine.resize();
    });
    await SceneLoader.AppendAsync('./', 'AliciaSolid.vrm', scene);

    let fileCount = 1;
    (document.getElementById('file-input') as HTMLInputElement).addEventListener('change', (evt) => {
        const file = (evt as any).target.files[0];
        console.log(`loads ${file.name} ${file.size} bytes`);
        const currentMeshCount = scene.meshes.length;
        SceneLoader.Append('file:', file, scene, () => {
            console.log(`loaded ${file.name}`);
            for (let i = currentMeshCount; i < scene.meshes.length; i++) {
                scene.meshes[i].translate(Vector3.Right(), 1.5 * fileCount);
                scene.meshes[i].receiveShadows = true;
            }
            fileCount++;
        });
    });
}

interface DebugProperties {
    webgl1: boolean;
    shadow: boolean;
    inspector: boolean;
}

function getDebugProperties(): DebugProperties {
    const href = window.location.href;

    return {
        webgl1: href.includes('webgl1'),
        shadow: href.includes('shadow'),
        inspector: href.includes('inspector'),
    };
}

main().catch((reason) => {
    console.error(reason);
});
