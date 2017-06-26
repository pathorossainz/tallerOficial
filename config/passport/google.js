var GoogleStrategy 	= require('passport-google-oauth').OAuth2Strategy;
var configAuth 			= require('../auth');
var User            = require('../../app/models/user');

module.exports = new GoogleStrategy({
		clientID		: configAuth.googleAuth.clientID,
		clientSecret: configAuth.googleAuth.clientSecret,
		callbackURL	: configAuth.googleAuth.callbackURL
	},
	function(accessToken, refreshToken, profile, done) {
			process.nextTick(function(){
				User.findOne({'google.id': profile.id}, function(err, user){
				// code
				});
			});
		});
