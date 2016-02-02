var path = require('path');

module.exports = {
    //devtool: 'inline-sourcemap',
    entry: path.resolve(__dirname, 'app'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};
