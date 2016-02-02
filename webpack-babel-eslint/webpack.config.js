var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
      loaders: [
        { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.js?$/, loader: 'eslint-loader', exclude: /node_modules/ }
      ]
    }
};
