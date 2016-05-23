exports = module.exports = function(app, express) {

	var welcomeRouter = express.Router();

	welcomeRouter.get('/', function(req, res) {
  		res.json({message: "Hello friend. Welcome to the API."});
	});
	app.use(welcomeRouter);
};
