module.exports = {
  port: 9010,
  root: "dist",
  webpack: {
    publicPath: "/",
    output: {
      "./index.html": {
        entry: "./src/app",
        commons:['common']
      },
      "./login.html": {
        entry: "./src/login",
        commons:['common']
      }
    },
    commonTrunk: {
      common:[
        "jquery",
        "manba",
        "js-model",
        "./src/js/common/utils",
        "./src/js/common/request",
        'hey-global',
        'hey-log',
        "heyui",
        "vue",
        "vue-router"
      ]
    },
    alias: {
      model: './src/js/model/',
      components: './src/components/',
    },
    global: {
      "Utils": './src/js/common/utils',
      "Manba": 'manba',
      "HeyUI": 'heyui',
      "Model": "js-model",
      "G": 'hey-global',
      "log": 'hey-log',
      "$": 'jquery',
      "R": './src/js/common/request'
    },
    devServer: {
	    "proxy": {
	      "/api": {
	        "target": "http://umock.ch-un.com"
	      }
	    },
      historyApiFallback: true
    },
    globalVars: './src/css/var.less',
    externals: {
    }
  },
  copy: []
};