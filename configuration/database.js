var dbname = "tvshows";

exports = module.exports = function(mongoose) {

  // Connection to DB
  mongoose.connect('mongodb://127.0.0.1:27017/' + dbname, function(err, res) {
    if(err) throw err;
    console.log('Connected to Database ' + dbname);
  });
};
