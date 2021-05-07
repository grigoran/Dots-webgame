var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index/index.js",
    lobby: "./src/lobby/js/index.js",
  },
  output: {
    path: __dirname + "/serv/public",
    publicPath: "/",
    filename: "[name].js",
    clean: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          // For webpack@4
          // test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index/index.html",
      filename: "index.html",
      chunks: ["index"],
      cache: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/lobby/index.html",
      filename: "lobby.html",
      chunks: ["lobby"],
      cache: true,
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        //use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
