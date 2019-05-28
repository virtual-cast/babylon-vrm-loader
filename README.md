# babylon-vrm-loader

[![npm version](https://badge.fury.io/js/babylon-vrm-loader.svg)](https://badge.fury.io/js/babylon-vrm-loader) [![Greenkeeper badge](https://badges.greenkeeper.io/virtual-cast/babylon-vrm-loader.svg)](https://greenkeeper.io/) [![CircleCI](https://circleci.com/gh/virtual-cast/babylon-vrm-loader.svg?style=svg)](https://circleci.com/gh/virtual-cast/babylon-vrm-loader) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

![alicia.png](alicia.png)

VRM porting to babylon.js.

This is **Work In Progress**.

This loader is used as [THE SEED ONLINE](https://seed.online) web VRM/VCI/glb viewer.

## Features

- Supports `.vrm` file loading
    - with `extensions.VRM` glTF Extension
- Supports `.vci` file loading
- Supports [MToonMaterial](https://github.com/virtual-cast/babylon-mtoon-material)
- Get bone([TransformNode](https://doc.babylonjs.com/api/classes/babylon.transformnode)) from Unity Humanoid bone mapping name
- TODO: [BlendShape](https://vrm.dev/univrm/components/univrm_blendshape/) morphing
- TODO: [Secondary Animation](https://vrm.dev/univrm/components/univrm_secondary/)
- TODO: WebXR sample with [First Person](https://vrm.dev/univrm/components/univrm_firstperson/)
- TODO: Supports [VCI](https://github.com/virtual-cast/VCI) features(partial support)
    - `VCAST_vci_material_unity`
    - TODO: `VCAST_vci_meta`
    - TODO: `VCAST_vci_embedded_script`
    - TODO: `VCAST_vci_audios`
    - TODO: `VCAST_vci_colliders`
    - TODO: `VCAST_vci_rigidbody`
    - TODO: `VCAST_vci_joints`
    - TODO: `VCAST_vci_item`

## Usage

### on browser

TBD.

### with npm/yarn

```s
$ npm install --save @babylonjs/core @babylonjs/loaders babylon-vrm-loader
# or
$ yarn add @babylonjs/core @babylonjs/loaders babylon-vrm-loader
```

```ts
import * as BABYLON from '@babylonjs/core'

// has side-effect
// ref. https://webpack.js.org/guides/tree-shaking#mark-the-file-as-side-effect-free
import 'babylon-vrm-loader'

// vrmFile is File object retrieved by <input type="file">.
const scene = await BABYLON.SceneLoader.LoadAsync('file:', vrmFile, engine);
const vrmManager = scene.metadata.vrmManagers[0];
const hips = vrmManager.getBone('hips'); // returns Nullable<TransformNode>
hips.translate(BABYLON.Vector3.Right(), 1.0);
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Build

```s
$ yarn build
```

### Debugging MToonMaterial

```s
$ yarn debug
```

You can see inspector on http://localhost:8080/

## Related Links

- [BabylonJS/Babylon.js: Babylon.js: a complete JavaScript framework for building 3D games with HTML 5 and WebGL](https://github.com/BabylonJS/Babylon.js)
- [vrm-c/UniVRM: Unity package that can import and export VRM format](https://github.com/vrm-c/UniVRM)
- [virtual-cast/babylon-mtoon-material: Unity MToon Shader WebGL porting to babylon.js.](https://github.com/virtual-cast/babylon-mtoon-material)

## Licenses

see [LICENSE](./LICENSE).

This project uses [babylon.js with Apache License, Version 2.0](https://github.com/BabylonJS/Babylon.js/blob/master/license.md).
