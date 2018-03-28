const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENV = "production";
const configCommon = require("./webpack.common")(ENV);

const config = Object.assign({}, configCommon.config, {
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    firebase: "firebase",
    "firebase/app": "firebase",
    "firebase/auth": "firebase",
    "firebase/firestore": "firebase"
  },

  plugins: [].concat(configCommon.config.plugins, [
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
        const externals = ["material-ui"];
        return (
          module.context && externals.find(e => module.context.indexOf(e) >= 0)
        );
      }
    }),
    //catch all - anything used in more than one place
    new webpack.optimize.CommonsChunkPlugin({
      name: "app-common",
      filename: "app-common.[hash:8].js",
      minChunks(module, count) {
        return count >= 2;
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        configCommon.paths.appSrcRoot,
        "app/templates/index.ejs"
      ),
      filename: path.join(configCommon.paths.appSrcRoot, "index.html"),
      excludeChunks: ["base"],
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    })
  ])
});

module.exports = config;
