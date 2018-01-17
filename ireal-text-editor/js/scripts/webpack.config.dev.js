const path = require("path");
const webpack = require("webpack")
const jsRoot = path.resolve(__dirname, "..");
const appSrc = path.resolve(jsRoot, "src");
const appOut = path.resolve(jsRoot, "build");
const public = path.resolve(jsRoot, "..");

var config = {
  entry: appSrc + "/index.jsx",
  output: {
    path: appOut,
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
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },
  plugins: [new webpack.HotModuleReplacementPlugin({
    // Options...
  })]
};

module.exports = config;
