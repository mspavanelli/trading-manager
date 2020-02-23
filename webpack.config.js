const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const PUBLIC_DIR = "public";

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, PUBLIC_DIR),
    hot: true,
    port: 7000
  },
  entry: path.resolve(__dirname, "src", "app", "index.js"),
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        },
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, PUBLIC_DIR, "index.html")
    })
  ],
  target: "web"
};
