var express 	= require('express')
var router 		= express.Router()
var passport 	= require('passport')

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
	var newImgsz = req.user.google.img.split("?sz=50")[0]+"?sz="+300;
	res.render('ricardo/google', { user: req.user, img:newImgsz });
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/');
}
