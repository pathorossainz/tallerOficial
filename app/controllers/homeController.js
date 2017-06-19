var express = require('express')
var router = express.Router()
var passport = require('passport')
var mongoose = require('mongoose');

module.exports = function(app){
	app.use('/', router);
};

router.get('/', function (req, res){
	res.render('index', {
		title: 'Google Auth'
	});
});
router.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

router.get('/profile', isLoggedIn, function(req, res) {
	var newSize="300"
	var str = req.user.google.img;
	var img = str.split("?sz=50")[0]+"?sz="+newSize;
	res.render('ricardo/google', { user: req.user, img:img });
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/');
}
