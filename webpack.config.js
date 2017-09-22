const path = require('path');

module.exports = {
  entry: './renderer.js',
  output: {
    path: path.resolve('build'),
    filename: 'renderer_bundle.js'
  },
  module: {

  }
}
