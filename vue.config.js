
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
	lintOnSave: false, // 关闭eslint
	configureWebpack: {
		resolve: {
			alias: {
				'styles': resolve('src/assets/styles')
			}
		}
		
	},
	devServer: {
		proxy: {
			"/api": {
				target: 'http://localhost:8080',
		        pathRewrite: {
		          '^/api': '/mock'
		        }
			}
		}
	}
}