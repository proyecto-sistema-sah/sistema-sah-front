module.exports = {
    "/api/v1/usuario/*": {
        "target": "http://localhost:8001/api/v1/usuario/",
        "secure": false,
        "logLevel": "debug",
        "pathRewrite": {
          "^/api/v1/usuario/": ""
        }
    }

}