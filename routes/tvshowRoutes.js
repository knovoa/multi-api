exports = module.exports = function(app, express) {

	var tvshowRouter = express.Router(),
			TVShow = require('../models/tvshow')(app),
			TVShowController = require('../controllers/tvshowController');

	tvshowRouter.route('/tvshows')
		.get(TVShowController.findAllTVShows)
		.post(TVShowController.addTVShow);
	tvshowRouter.route('/tvshows/:id')
		.get(TVShowController.findById)
		.put(TVShowController.updateTVShow)
		.delete(TVShowController.deleteTVShow);

	app.use('/api', tvshowRouter);
};
