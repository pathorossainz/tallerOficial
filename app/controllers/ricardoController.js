var express 	= require('express')
var router 		= express.Router()
var passport	= require('passport')

module.exports = function(app,passport){
	app.use('/ricardo', router);
};

router.get('/', function (req, res){
	res.render('ricardo/index', {
		title: 'Google Auth'
	});
});

router.get('/auth/google',
	passport.authenticate('google-a',
	{
		scope: ['profile', 'email']
	})
);

router.get('/auth/google/callback',
	passport.authenticate('google-a',
	{
		successRedirect: '/profile',
		failureRedirect: '/'
	})
);
