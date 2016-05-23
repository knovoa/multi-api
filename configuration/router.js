
exports = module.exports = function(app, express) {

	var WelcomeRoutes = require('../routes/welcomeRoutes')(app, express),
			TVShowRoutes = require('../routes/tvshowRoutes')(app, express),
			UserRoutes = require('../routes/userRoutes')(app, express);
};
