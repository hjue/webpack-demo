const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    host: "localhost",
    compress: true,
    port: 8081,
    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        changeOrigin:true,
        ws:true,
        secure: false,        
        pathRewrite: function (path, req) { 
          return path.replace('/api', '/') 
        },
        onProxyReq: function (proxyReq, req) {
          console.log('RAW Request from the target',JSON.stringify(req.headers, true, 2));      
          // Object.keys(req.headers).forEach(function (key) {
          //   proxyReq.setHeader(key, req.headers[key]);
          // })
        },

        onProxyRes: function (proxyRes, req, res) {
          console.log('RAW Response from the target',JSON.stringify(proxyRes.headers, true, 2));
          // Object.keys(proxyRes.headers).forEach(function (key) {
          //   res.append(key, proxyRes.headers[key]);
          // })
        },        
        // cookieDomainRewrite:"localhost",
        debug: true
      }
    }
  }
};