var mongoose = require('mongoose'),
		TVShow  = mongoose.model('TVShow');

//GET - Return all tvshows in the DB
exports.findAllTVShows = function(req, res) {
	TVShow.find(function(err, tvshows) {
		if(err) return res.send(500, err.message);
		res.status(200).json(tvshows);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
    	if(err) return res.send(500, err.message);
		res.status(200).json(tvshow);
	});
};

//POST - Insert a new TVShow in the DB
exports.addTVShow = function(req, res) {

	var tvshow = new TVShow({
		title:     req.body.title,
		year: 	   req.body.year,
		country:   req.body.country,
		poster:    req.body.poster,
		seasons:   req.body.seasons,
		genre:     req.body.genre,
		summary:   req.body.summary,
		posted_by: req.body.posted_by
	});

	tvshow.save(function(err, tvshow) {
		if(err) return res.send(500, err.message);
    	res.status(200).json(tvshow);
	});
};

//PUT - Update a register already exists
exports.updateTVShow = function(req, res) {

	TVShow.findById(req.params.id, function(err, tvshow) {
		tvshow.title   = req.body.petId;
		tvshow.year    = req.body.year;
		tvshow.country = req.body.country;
		tvshow.poster  = req.body.poster;
		tvshow.seasons = req.body.seasons;
		tvshow.genre   = req.body.genre;
		tvshow.summary = req.body.summary;

		tvshow.save(function(err) {
			if(err) return res.send(500, err.message);
      		res.status(200).json(tvshow);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteTVShow = function(req, res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
		tvshow.remove(function(err) {
			if(err) return res.send(500, err.message);
      		res.status(200);
		});
	});
};
