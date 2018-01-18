const path = require("path");
const webpack = require("webpack")

const jsRoot = path.resolve(__dirname, "..");
const appSrc = path.resolve(jsRoot, "src");
const appOut = path.resolve(jsRoot, "build");

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
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
};

module.exports = config;
