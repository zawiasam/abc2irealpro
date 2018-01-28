const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENV = "develop";
const configCommon = require("./webpack.common")(ENV);

const config = Object.assign({}, configCommon.config, {
  devtool: "cheap-module-eval-source-map",
  devServer: {
    hot: true,
    compress: true, // enable gzip compression
    proxy: {
      '/app/build/*': {
        target: 'http://localhost:8080/',
        pathRewrite: { '^/app/build': '' },
    },
  }},
  plugins: [].concat(configCommon.config.plugins, [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(
        configCommon.paths.appSrcRoot,
        "app/templates/index.ejs"
      )
    })
  ])
});

module.exports = config;
