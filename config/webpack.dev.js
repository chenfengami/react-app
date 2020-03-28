const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: 'dist',
    port: 7000,
    proxy: {
      '/cf': 'http://localhost:3000'
    }
  },
  resolve: {
    alias: {
      '@pages': path.join(__dirname, '../src/pages')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: [
              ['@babel/plugin-proposal-class-properties']
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      react: {
        postcss: [require('postcss-px2rem')({remUnit: 75})]
      }
    })
  ]
}
