const path = require('path');
const webpack = require('webpack');
const globalVars = require('./src/css/var.js');

module.exports = {
  assetsDir: 'src/images',
  pages: {
    index: {
      entry: 'src/app.js',
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: { globalVars }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@common': path.resolve(__dirname, 'src/js/common/'),
        '@model': path.resolve(__dirname, 'src/js/model/'),
        '@js': path.resolve(__dirname, 'src/js/')
      }
    },
    plugins: [new webpack.ProvidePlugin({})]
  },
  devServer: {
    // proxy: {
    // 此处应该配置为开发服务器的后台地址
    // 配置文档： https://cli.vuejs.org/zh/config/#devserver-proxy
    // '/api': {
    //   target: 'http://xxx.xx.xx'
    // }
    // }
  }
};
