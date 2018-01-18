const path = require("path");
const webpack = require("webpack")
const jsRoot = path.resolve(__dirname, "..");
const appSrc = path.resolve(jsRoot, "src");
const appOut = path.resolve(jsRoot, "build");
const public = path.resolve(jsRoot, "..");

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: appSrc + "/index.jsx",
  output: {
    path: appOut,
    publicPath: '/js/build/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: appSrc,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    modules: [process.env.NODE_PATH || "node_modules"],
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: public, // boolean | string | array, static file location
    hot: true,
    compress: true, // enable gzip compression
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = config;
