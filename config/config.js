var path 			= require('path')
var rootPath	= path.normalize(path.join(__dirname, '/..'))
var env = process.env.NODE_ENV || 'development'

var config = {
	development: {
		root: rootPath,
		app: {
			name: 'Taller AM',
		},
		port: process.env.PORT || 8080,
		db: 'mongodb://localhost/taller',
	},
	production: {
		root: rootPath,
		app: {
			name: 'Taller AM',
		},
		port: process.env.PORT || 8888,
		db: 'mongodb://localhost/taller_production',
	}
}
 module.exports = config[env]
