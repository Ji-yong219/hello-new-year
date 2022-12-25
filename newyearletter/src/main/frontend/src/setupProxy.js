const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'http://203.252.240.74:8080',
      changeOrigin: true,
    })
  )
}
