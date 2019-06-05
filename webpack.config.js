const resolve = require('path').resolve;
const merge = require('webpack-merge');

const baseConfig = {
    mode: 'production',
    entry: resolve(__dirname, 'src', 'index'),
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
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
            library: 'babylon-vrm-loader',
            libraryTarget: 'umd',
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
            library: 'VRMLoader',
            libraryTarget: 'window',
            filename: 'index.js',
            path: resolve(__dirname, 'dist'),
        },
        externals: [
            function (context, request, callback) {
                if (/^@babylonjs\/core.*$/.test(request)) {
                    return callback(null, 'window BABYLON');
                }
                // @see https://github.com/BabylonJS/Babylon.js/blob/master/Tools/Config/config.json#L415
                if (/^@babylonjs\/loaders\/glTF\/2\.0.*$/.test(request)) {
                    return callback(null, 'window LOADERS.GLTF2');
                }
                if (/^@babylonjs\/loaders.*$/.test(request)) {
                    return callback(null, 'window LOADERS');
                }
                callback();
            },
        ],
    }),
];
