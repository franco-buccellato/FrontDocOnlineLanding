const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware(
            {
                /* target: 'http://localhost:4000/', */
                target: 'https://doconline-backend.azurewebsites.net/',
                changeOrigin: true,
                ws: true,
                onProxyReq: function(request) {
                    request.setHeader("origin", "https://doconline-backend.azurewebsites.net/");
                    /* request.setHeader("origin", 'http://localhost:4000/'); */
                },
            }
        )
    );
};