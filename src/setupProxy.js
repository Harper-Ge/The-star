const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1", {
      target: "http://120.76.142.160:9999",
      changeOrigin: true,
      pathRewrite: { "^/api1": "" },
    })
  );
};
