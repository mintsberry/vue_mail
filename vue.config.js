module.exports = {
  pluginOptions: {
    quasar: {
      rtlSupport: true,
      treeShake: true,
      framework: {
        components: [
          'QTabs',
          'QTab',
          'QTabPane',
          'QRouteTab'
        ]
      }
    }
  },
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/,
    /[\\\/]node_modules[\\\/]quasar[\\\/]/,
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ]
}
