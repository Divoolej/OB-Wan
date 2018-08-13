const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "ui_bundle.css",
  disable: process.env.NODE_ENV === "development",
});

module.exports = {
  entry: {
    ui: './js/ui.jsx',
  },
  target: 'electron-renderer',
  output: {
    path: path.resolve('build'),
    filename: '[name]_bundle.js',
    publicPath: 'http://localhost:8080/build/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: extractSass.extract({
        use: ['css-loader', 'sass-loader?sourceMap'],
        fallback: 'style-loader',
      })},
      { test: /\.css$/, use: extractSass.extract({
        use: ['css-loader'],
        fallback: 'style-loader',
      })},
      {
        test: /\.svg$/,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    extractSass,
  ]
}
