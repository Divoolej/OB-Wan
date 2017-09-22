const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "renderer_bundle.css",
  disable: process.env.NODE_ENV === "development",
});

module.exports = {
  entry: './js/index.jsx',
  output: {
    path: path.resolve('build'),
    filename: 'renderer_bundle.js',
    publicPath: 'http://localhost:8080/build/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: extractSass.extract({
        use: ['css-loader', 'sass-loader'],
        fallback: 'style-loader',
      })}
    ]
  },
  plugins: [
    extractSass,
  ]
}
