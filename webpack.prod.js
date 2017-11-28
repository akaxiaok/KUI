const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge.strategy({
  entry: 'replace', // or 'replace', defaults to 'append'
})(common, {
  devtool: 'source-map', // 生成 source-map 有多种类型
  entry: {
    index: path.resolve(__dirname, 'src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方 // path.resolve 生成绝对路径
    filename: '[name].[chunkhash].js',//打包后输出文件的文件名
    publicPath: '/',
    chunkFilename: '[name].[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 清空 dist 目录
    new HtmlWebpackPlugin({
      title: 'Output'
    }), // 生成 html 文件
    new UglifyJSPlugin({  // 精简代码，丑化、压缩、裁剪不会运行的代码(tree shaking)，需要去掉 babel es6 模块，使用 webpack 的模块
      sourceMap: true
    }),
    // 设置环境变量
    // new webpack.EnvironmentPlugin({
    //   NODE_ENV: 'production', // use 'production' unless process.env.NODE_ENV is defined
    //   DEBUG: false
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
});