var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	google: {
		id: 		String,
		tokeng: 	String,
		tokenc: 	String,
		email: 	String,
		name: 	String,
		img: 		String
	}
});

module.exports = mongoose.model('User', userSchema);
