const { resolve } = require('path');
const { merge } = require('webpack-merge');

const baseConfig = {
    mode: 'production',
    entry: resolve(__dirname, 'src', 'index'),
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        modules: [resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.ts'],
    },
    target: 'web',
};

module.exports = [
    /**
     * to UMD for npm
     */
    merge(baseConfig, {
        output: {
            library: {
                name: 'babylon-vrm-loader',
                type: 'umd',
            },
            filename: 'index.module.js',
            path: resolve(__dirname, 'dist'),
        },
        externals: [
            /^@babylonjs.*$/,
        ],
    }),
    /**
     * to global
     */
    merge(baseConfig, {
        output: {
            library: {
                name: 'VRMLoader',
                type: 'window',
            },
            filename: 'index.js',
            path: resolve(__dirname, 'dist'),
        },
        externals: [
            ({context, request}, callback) => {
                if (/^@babylonjs\/core.*$/.test(request)) {
                    return callback(null, 'var BABYLON');
                }
                // @see https://github.com/BabylonJS/Babylon.js/blob/master/Tools/Config/config.json#L415
                if (/^@babylonjs\/loaders\/glTF\/2\.0.*$/.test(request)) {
                    return callback(null, 'var LOADERS.GLTF2');
                }
                if (/^@babylonjs\/loaders.*$/.test(request)) {
                    return callback(null, 'var LOADERS');
                }
                callback();
            },
        ],
    }),
];
