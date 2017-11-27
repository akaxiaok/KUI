const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge.strategy({
  entry: 'replace', // or 'replace', defaults to 'append'
})(common, {
  devtool: 'inline-source-map', // 生成 source-map 有多种类型
  entry: {
    index: ['react-hot-loader/patch', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', path.resolve(__dirname, 'src/index.jsx')], // 使用 webpack-hot-middleware 需要添加入口参数
  },
});