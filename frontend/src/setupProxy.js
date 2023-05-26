const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://newyearletter.site:8080/',
      changeOrigin: true,
    })
  )
}
