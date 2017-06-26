var User            	= require('../app/models/user');
var googleAuth 				= require('./passport/google.js')
var GoogleCalendar 				= require('./passport/calendar.js')

module.exports = function(passport) {
	passport.serializeUser(function(user, done){ done(null, user.id); });
	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});
	passport.use('google-a',googleAuth);
	passport.use('google-c',GoogleCalendar);
 };
