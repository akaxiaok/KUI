const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  devtool: 'inline-source-map',
  entry: {
    // hot loader entry 文件都要添加 module.hot.accept
    index: ['react-hot-loader/patch',
      // 'webpack-dev-server/client?http://localhost:8080', // if iframe mode(inline:false)
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'src/index.jsx')
    ],
    math: ['react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'src/math.js')
    ],
  },
// entry: {
//   //index: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', path.resolve(__dirname, 'src/index.jsx')], // 使用 webpack-hot-middleware 需要添加入口参数
//   index: path.resolve(__dirname, 'src/index.jsx'),
//   // Test: path.resolve(__dirname, 'src/Test.jsx')
// },
// __dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录
  output: {
    path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方 // path.resolve 生成绝对路径
    filename: '[name].bundle.js',//打包后输出文件的文件名
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 清空 dist 目录
    new HtmlWebpackPlugin({
      title: 'Output'
    }), // 生成 html 文件
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(), // 热替换 用于自定义的 server
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 指定公共 bundle 的名称
    }),
  ],  // 改用 express & webpack-dev-middleware
  devServer: {
    contentBase: './dist', // webpackServer 使用的路径
    historyApiFallback: true, // 不跳转
    inline: true,
    open: false,// 是否自动打开浏览器
    hot: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        // use: {
        loaders: ['babel-loader'],
        // },
        exclude: /node_modules/
      }, {
        test: /\.css|\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: "./image/[name].[ext]", // 输出文件
          }
        }]  // 加载图片和字体，使用 url-loader 更好
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 50000,
            name: "./fonts/[name].[ext]", // 输出文件
          }
        }],// https://survivejs.com/webpack/loading/fonts/ 处理字体
      }
    ]
  }
};
