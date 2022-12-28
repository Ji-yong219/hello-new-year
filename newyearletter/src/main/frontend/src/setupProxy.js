const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://newsyearletter.site:8080/',
      changeOrigin: true,
    })
  )
}