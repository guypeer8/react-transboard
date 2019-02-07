const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/lib'),
        filename: 'index.js',
        library: '',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    // optimization: {
    //     minimize: true,
    // },
    devServer: {
        port: 3001,
    },
};
