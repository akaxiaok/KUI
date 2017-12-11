const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /(\.jsx|\.js|\.ts|\.tsx)$/,
        // use: {
        // loaders: ['babel-loader'],
        loaders: ['react-hot-loader/webpack','ts-loader'], // ts, babel 无效，此处添加 'react-hot-loader/webpack' 以支持热部署
        // },
        exclude: /node_modules/
      }, {
        test: /\.css|\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.(png|svg|jpg|gif|ico)$/,
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
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    alias: {
      Components: path.resolve(__dirname, 'src/components')
    }
  }
};
