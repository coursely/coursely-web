const merge = require("webpack-merge");
const webpack = require("webpack");
const config = require("./webpack.common.js");

module.exports = merge(config, {
  mode: "development",
  devServer: { contentBase: "./dist" },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      inferno: __dirname + "/node_modules/inferno/dist/index.dev.esm.js"
    }
  }
});
