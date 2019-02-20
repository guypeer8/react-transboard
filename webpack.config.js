const path = require('path');

module.exports = {
    entry: './src/lib/index.js',
    output: {
        path: path.resolve(__dirname, './dist/lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
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
};
