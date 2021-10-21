const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
        {
            test: /\.html$/,
            exclude: [/node_modules/, require.resolve('./src/index.html')],
            use: {
                loader: 'html-loader',
            },
        },
        {
            test: /\.(s*)css$/,
            use: [
                MiniCssExtractPlugin.loader, 'css-loader',
            ],
        },
        {
            test: /\.(jpg|png|svg|jpeg|gif)$/,
            type: 'asset/resource'
        }, {
            test: /\.svg$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  encoding: false,
                },
              },
            ],
          },
    ],
},
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './style.css',
    }),
  ],
};
