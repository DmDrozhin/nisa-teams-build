const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/ddrzohin-cv' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import '@/styles/index.scss';"
      }
    }
  },
  configureWebpack: {
    plugins: [
      // eslint-disable-next-line no-undefined
      new webpack.DefinePlugin({
        // Vue CLI is in maintenance mode,
        // and probably won't merge my PR to fix this in their tooling
        // https://github.com/vuejs/vue-cli/pull/7443
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
    ]
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Dmitry Drozhin - Nisa UA Kit prog (Vue)'
      return args
    })
  },
  devServer: {
    client: {
      overlay: {
        runtimeErrors: (error) => {
          const ignoreErrors = [
            'ResizeObserver loop limit exceeded',
            'ResizeObserver loop completed with undelivered notifications.'
          ]
          if (ignoreErrors.includes(error.message)) {
            return false
          }
          return true
        }
      }
    }
  }
})
