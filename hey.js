module.exports = {
  port: 9012,
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
        "manba",
        "js-model",
        "./src/js/common/utils",
        "./src/js/common/request",
        'hey-global',
        'hey-log',
        "heyui",
        "vue",
        "vuex",
        "vue-router"
      ]
    },
    alias: {
      model: './src/js/model/',
      js: './src/js/',
      components: './src/components/',
    },
    global: {
      "Utils": './src/js/common/utils',
      "Manba": 'manba',
      "HeyUI": 'heyui',
      "Model": "js-model",
      "G": 'hey-global',
      "log": 'hey-log',
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
  copy: ['static/images/*']
};