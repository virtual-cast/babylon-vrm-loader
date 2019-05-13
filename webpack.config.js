const resolve = require('path').resolve;

module.exports = {
    mode: 'production',
    entry: resolve(__dirname, 'src', 'index'),
    output: {
        library: 'babylon-vrm-loader',
        libraryTarget: 'umd',
        filename: 'index.js',
        path: resolve(__dirname, 'dist'),
    },
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
    externals: [
        /^@babylonjs\/core.*$/,
        /^@babylonjs\/loaders.*$/,
    ],
};
