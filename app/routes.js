var User = require('./models/user');
module.exports = function(app, passport){

	app.get('/', function(req, res){
		res.render('index');
	});
	app.get('/ricardo', function(req, res){
		res.render('ricardo_index');
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));

	app.get('/signup', function(req, res){
		res.render('signup', { message: req.flash('signupMessage') });
	});

	app.get('/profile', isLoggedIn, function(req, res){
		res.render('google', { user: req.user });
	});

	app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

	app.get('/auth/google/callback',
	  passport.authenticate('google', { successRedirect: '/profile',
	                                      failureRedirect: '/' }));


	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/');
}
