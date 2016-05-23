exports = module.exports = function(app, express) {

  var userRouter = express.Router(),
      User = require('../models/user')(app),
	    UserController = require('../controllers/userController');

  userRouter.route('/users')
    .get(UserController.findAllUsers)
    .post(UserController.addUser);
  app.use('/api', userRouter);
};
