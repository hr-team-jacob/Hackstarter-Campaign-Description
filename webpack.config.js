var path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    entry: {
        main: './client/src/index.jsx'
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'client/dist')
    }
};