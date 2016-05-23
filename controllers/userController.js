var mongoose = require('mongoose'),
		User  = mongoose.model('User');

//GET - Return all users in the DB
exports.findAllUsers = function(req, res) {
	User.find(function(err, users) {
		if(err) return res.send(500, err.message);
		res.status(200).json(users);
	});
};

//POST - Insert a new User in the DB
exports.addUser = function(req, res) {

	var user = new User({
		name:    req.body.name,
		email: 	 req.body.email
  });

	user.save(function(err, user) {
		if(err) return res.send(500, err.message);
    	res.status(200).json(user);
	});
};
