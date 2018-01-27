const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const appSrcRoot = path.resolve(__dirname, "..");

function getConfigCommon(_env_) {
  const paths = {
    appSrcRoot: appSrcRoot,
    appJsSrc: path.resolve(appSrcRoot, "app/src"),
    appJsBuild: path.resolve(appSrcRoot, "app/build"),
    appAssets: "app/build/",
    config: path.resolve(__dirname, `./config/${_env_}.config.js`)
  };

  var config = {
    entry: {
      main: paths.appJsSrc + "/index.jsx",
      config: paths.config
    },
    output: {
      path: paths.appJsBuild,
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
        },
        {
          test: /\.svg$/,
          loader: "file-loader",
          exclude: /node_modules/,
          options: {
            publicPath: paths.appAssets,
            useRelativePath: true
          }
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
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(_env_)
        }
      }),
      new CleanWebpackPlugin([paths.appJsBuild], {
        allowExternal: true,
        verbose: true
      })
    ]
  };
  return { config, paths };
}

module.exports = getConfigCommon;
