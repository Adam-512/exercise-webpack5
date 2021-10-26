const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const isDev = process.env.Node_Env !== "production";
module.exports = {
  devtool: isDev ? "source-map" : false,
  output: {
    clean: true,
    filename: "index.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(s|l)?css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, //图片大小阈值
          },
        },
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset",
        generator: {
          filename: "assets/fonts/[hash][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
  devServer: {
    open: true,
    hot: true,
  },
};
