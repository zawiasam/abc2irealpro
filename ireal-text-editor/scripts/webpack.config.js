const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const firebaseConfig = require("./config/firebase.json");
const ENV = "production";

const appSrcRoot = path.resolve(__dirname, "..");

const paths = {
  appSrcRoot: appSrcRoot,
  appJsSrc: path.resolve(appSrcRoot, "app/src"),
  appJsBuild: path.resolve(appSrcRoot, "app/build")
};

var config = {
  entry: paths.appJsSrc + "/index.jsx",
  output: {
    path: paths.appJsBuild,
    filename: "[name].[chunkhash:8].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: paths.appJsSrc,
        loader: "babel-loader",
        exclude: /node_modules/
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
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(ENV)
      },
      config: {
        firebase: JSON.stringify(firebaseConfig[ENV])
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.[chunkhash:8].js",
      minChunks(module, count) {
        return module.context && module.context.indexOf("node_modules") >= 0;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "ui-libs",
      filename: "ui-libs.[chunkhash:8].js",
      minChunks(module, count) {
        const externals = ['react', 'material-ui'];
        return module.context && externals.find((e) => module.context.indexOf(e)>=0);
      }
    }),
    //catch all - anything used in more than one place
    new webpack.optimize.CommonsChunkPlugin({
      name: "app-common",
      filename: "app-common.[chunkhash:8].js",
      minChunks(module, count) {
        return count >= 2;
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(paths.appSrcRoot, "app/templates/index.ejs"),
      filename: path.join(paths.appSrcRoot, "index.html"),
      excludeChunks: ["base"],
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new CleanWebpackPlugin([paths.appJsBuild], {
      allowExternal: true,
      verbose: true
    })
  ]
};

module.exports = config;
