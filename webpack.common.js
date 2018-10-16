const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const transformInferno = require("ts-transform-inferno").default;

module.exports = {
  resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          getCustomTransformers: program => ({
            before: [transformInferno()]
          }),
          reportFiles: ["src/**/*.{ts,tsx}"]
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({ title: "Coursely", template: "public/index.html" })
  ]
};
