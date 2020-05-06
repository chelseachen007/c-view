const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  lintOnSave: true,
  outputDir: 'cjview',
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@com', resolve('src/components'))
      .set('@img', resolve('src/images'))
      .set('@style', resolve('src/assets/scss'))
      .set("@assets", resolve('src/assets'))
      .set("@utils", resolve('src/utils'))
      .set("@mixins", resolve('src/mixins'))
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: 'all'
    })
  },
  css: {
    extract: true
  },

  devServer: {
    host: '0.0.0.0',
    open: true, // 是否自动打开浏览器页面
    port: 8080, // 端口地址
    https: false, // 使用https提供服务

    proxy: {
      '/repos': {
        target: 'http://47.110.59.12',
        changeOrigin: true,
        pathRewrite: {
          '^/repos': ''
        }
      },
    },
  },
}