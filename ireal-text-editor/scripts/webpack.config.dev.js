const path = require("path");
const fs = require("fs");
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
      "/app/build/*": {
        target: "http://localhost:8080/",
        pathRewrite: { "^/app/build": "" }
      },
      "/**": {
        target: "/index.html", //default target
        secure: false,
        bypass: function(req, res, opt) {
          //your custom code to check for any exceptions
          //console.log('bypass check', {req: req, res:res, opt: opt});
          if (
            req.path.indexOf("/img/") !== -1 ||
            req.path.indexOf("/public/") !== -1
          ) {
            return "/";
          }

          if (req.headers.accept.indexOf("html") !== -1) {
            return "/index.html";
          }
        }
      },
      historyApiFallback: true,
      setup: function(app) {
        app.use(function pushStateHook(req, res, next) {
          var ext = path.extname(req.url);
          if ((ext === "" || ext === ".html") && req.url !== "/") {
            res.setHeader("Content-Type", "text/html");
            fs.createReadStream(configCommon.paths.appAssets).pipe(res);
          } else {
            next();
          }
        });
      }
    }
  },
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
