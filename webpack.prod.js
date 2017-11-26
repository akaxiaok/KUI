const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map', // 生成 source-map 有多种类型
  entry: {
    index: path.resolve(__dirname, 'src/index.jsx'),
  },
  plugins: [
    new UglifyJSPlugin({  // 精简代码，丑化、压缩、裁剪不会运行的代码(tree shaking)，需要去掉 babel es6 模块，使用 webpack 的模块
      sourceMap: true
    })
  ]
});