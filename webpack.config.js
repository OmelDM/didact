const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use:
                    {
                        loader: 'awesome-typescript-loader'
                    }
            },
        ]
    },
};