var express = require('express')
var router 	= express.Router()
var passport	= require('passport')

var gcal = require('google-calendar');
var google_calendar   = require(__dirname +'/../../GoogleCalendar.js');


module.exports = function(app){
	app.use('/lady', router);
};

router.get('/', function (req, res){
	res.render('lady/index', {
		title: ''
	});
});

router.get('/auth/calendar',
  passport.authenticate('google-c', {
  	scope: ['profile','openid', 'email', 'https://www.googleapis.com/auth/calendar'] }));

router.get('/auth/calendar/callback',
  passport.authenticate('google-c',
	{
		successRedirect: '/calendar',
		failureRedirect: '/'
	})
 );
