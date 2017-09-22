const path = require('path');

module.exports = {
  entry: './renderer.js',
  output: {
    path: path.resolve('build'),
    filename: 'renderer_bundle.js',
    publicPath: 'http://localhost:8080/build/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  }
}
