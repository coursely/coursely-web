const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = {
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  devtool: "source-map",
  module: { rules: [{ test: /\.tsx?/, loader: "awesome-typescript-loader" }] },
  plugins: [new CheckerPlugin(), new HtmlWebpackPlugin({ title: "Coursely" })]
};
