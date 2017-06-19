var express = require('express')
var router 	= express.Router()

module.exports = function(app){
	app.use('/lady', router);
};

router.get('/', function (req, res){
	res.render('lady/index', {
		title: ''
	});
});
