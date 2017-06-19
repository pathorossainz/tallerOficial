var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var glob = require('glob');
var MongoStore 			= require('connect-mongo')(session);

var app = express();

var config = require('./config/config.js');
mongoose.connect(config.db);
require('./config/passport')(passport);
app.use(express.static(config.root + '/app/src'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
		secret: 'z3cret',
		saveUninitialized: true,
		resave: true,
		store: new MongoStore({
			url: config.db,
			collection : 'sessions'
		})
	}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());




app.set('view engine', 'pug');
app.use(express.static(config.root + '/app/src'))
var controllers = glob.sync(config.root + '/app/controllers/*.js');
	controllers.forEach (function(controller){
		require(controller)(app,passport);
})
//require('./app/routes.js')(app, passport);

app.listen(config.port);
console.log('Server running at '+ 'http://localhost:'+config.port);
