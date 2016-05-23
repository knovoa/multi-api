var mongoose = require('mongoose');

exports = module.exports = function() {

	var userSchema = new mongoose.Schema({
		name: 		{ type: String },
    email:    { type: String }
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		},
		versionKey: false
	});
	mongoose.model('User', userSchema);
};
