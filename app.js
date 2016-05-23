var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    database = require('./configuration/database'),
    router = require('./configuration/router'),
    logger = require('morgan');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(logger('dev'));

//Import Database
database(mongoose);

//Import Router
router(app, express);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
