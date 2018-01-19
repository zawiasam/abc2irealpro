const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appSrcRoot = path.resolve(__dirname, "..");

const paths = {
  appSrcRoot: appSrcRoot,
  appJsSrc: path.resolve(appSrcRoot, "app/src"),
  appJsBuild: path.resolve(appSrcRoot, "app/dev")
};
const public = paths.publicPath;

var config = {
  devtool: "cheap-module-eval-source-map",
  entry: paths.appJsSrc + "/index.jsx",
  output: {
    path: paths.appJsBuild,
    publicPath: paths.publicPath,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: paths.appJsSrc,
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
    compress: true // enable gzip compression
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(paths.appSrcRoot, "app/templates/index.ejs")
    })
  ]
};

module.exports = config;
