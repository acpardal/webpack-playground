var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
      loaders: [
        { test: /\.js?$/, loaders: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
        //same as { test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/ }
        { test: /\.css$/, loader: "style!css", exclude: /node_modules/ }
      ]
    }
};
