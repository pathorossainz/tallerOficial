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
				console.log(profile);
				User.findOne({'google.id': profile.id}, function(err, user){
				if(err)
					return done(err);
				if(user)
				{
					user.google.tokeng =accessToken;
					user.save();
					return done(null, user);
				}
				else {
					var newUser = new User();
					newUser.google.id = profile.id;
					newUser.google.tokeng =accessToken;
					newUser.google.name = profile.displayName;
					newUser.google.email = profile.emails[0].value;
					newUser.google.img = profile.photos[0].value;
					newUser.save(function(err){
						if(err)
							throw err;
						return done(null, newUser);
					})
				}
				});
			});
		});
