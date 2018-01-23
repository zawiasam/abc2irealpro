const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ENV = "develop";

const appSrcRoot = path.resolve(__dirname, "..");

const paths = {
  appSrcRoot: appSrcRoot,
  appJsSrc: path.resolve(appSrcRoot, "app/src"),
  appJsBuild: path.resolve(appSrcRoot, "app/dev"),
  config: path.resolve(__dirname, `./config/${ENV}.config.js`)
};
const public = paths.publicPath;

var config = {
  devtool: "cheap-module-eval-source-map",
  entry: {
    main: paths.appJsSrc + "/index.jsx",
    config: paths.config
  },
  output: {
    path: paths.appJsBuild,
    publicPath: paths.publicPath,
    filename: "[name].[hash:8].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: paths.appJsSrc,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?/,
        include: paths.appJsSrc,
        loader: "babel-loader!ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [process.env.NODE_PATH || "node_modules"],
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "app-config": paths.config
    }
  },
  devServer: {
    contentBase: public, // boolean | string | array, static file location
    hot: true,
    compress: true // enable gzip compression
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(paths.appSrcRoot, "app/templates/index.ejs")
    })
  ]
};

module.exports = config;
