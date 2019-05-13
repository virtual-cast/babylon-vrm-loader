# babylon-vrm-loader

[![npm version](https://badge.fury.io/js/babylon-vrm-loader.svg)](https://badge.fury.io/js/babylon-vrm-loader) [![Greenkeeper badge](https://badges.greenkeeper.io/virtual-cast/babylon-vrm-loader.svg)](https://greenkeeper.io/) [![CircleCI](https://circleci.com/gh/virtual-cast/babylon-vrm-loader.svg?style=svg)](https://circleci.com/gh/virtual-cast/babylon-vrm-loader) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

VRM porting to babylon.js.

This is **Work In Progress**.

## Features

- supports `.vrm` or `.vci` file loading
- supports MToonMaterial
- TODO: BlendShape(MorphTarget) is broken

## Usage

```ts
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

## Licenses

see [LICENSE](./LICENSE).

This project uses [babylon.js with Apache License, Version 2.0](https://github.com/BabylonJS/Babylon.js/blob/master/license.md).
