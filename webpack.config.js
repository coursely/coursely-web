const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = {
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  devtool: "source-map",
  devServer: { contentBase: "./dist" },
  module: { rules: [{ test: /\.tsx?/, loader: "awesome-typescript-loader" }] },
  plugins: [
    new CheckerPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({ title: "Coursely" }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
