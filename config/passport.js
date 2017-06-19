var User            	= require('../app/models/user');
var googleAuth 				= require('./passport/google.js')

module.exports = function(passport) {
	passport.serializeUser(function(user, done){ done(null, user.id); });
	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});
	passport.use(googleAuth);
 };
