const path = require('path');
module.exports = {
  entry: {
    index: ['babel-polyfill',
      'react-hot-loader/patch',
      // 'webpack-dev-server/client?http://localhost:8080', // if iframe mode(inline:false)
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'src/index.jsx')
    ],
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
