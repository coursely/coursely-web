const merge = require("webpack-merge");
const webpack = require("webpack");
const config = require("./webpack.common.js");

module.exports = merge(config, {
  mode: "development",
  devServer: { contentBase: "./dist" },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
