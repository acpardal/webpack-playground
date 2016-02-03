var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        path: path.resolve(__dirname, 'build', 'assets'),
        publicPath: 'assets/',
        filename: 'bundle.js',
    },
    module: {
      loaders: [
        { test: /\.js?$/, loaders: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
        //same as { test: /\.css$/, loader: "style-loader!css-loader" }
        { test: /\.css$/, loader: "style!css" },
        //images less than 10000bytes are inlined
        { test: /\.(png|jpg)$/, loader: 'url?limit=10000' },
        //fonts less than 10000bytes are inlined
        { test: /\.woff$/, loader: 'url?limit=10000' }
      ]
    }
};
