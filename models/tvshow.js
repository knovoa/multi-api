var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

exports = module.exports = function() {

	var tvshowSchema = new mongoose.Schema({
		title: 		{ type: String },
		year: 		{ type: Number },
		country: 	{ type: String },
		poster:  	{ type: String },
		seasons: 	{ type: Number },
		genre: 		{
			type: String,
			enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
		},
		summary: { type: String },
		posted_by: { type: Schema.ObjectId, ref: 'User' }
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		},
		versionKey: false
	});
	mongoose.model('TVShow', tvshowSchema);
};
