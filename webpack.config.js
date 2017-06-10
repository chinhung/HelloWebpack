var path = require('path');

module.exports = {
    entry: [
       'webpack-dev-server/client?http://localhost:8080',
       './app/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

