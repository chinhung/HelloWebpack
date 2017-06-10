var path = require('path');

module.exports = {
    entry: {
        server: 'webpack-dev-server/client?http://localhost:8080',
        main: './app/index.js',
        vendor: 'moment'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};

