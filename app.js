var express     = require('express'), // Express framework
    mongoose    = require('mongoose'), // MongoDB Mapping
    bodyParser  = require('body-parser'), // Request body parsing
    dotenv      = require('dotenv'), // Hiding env variables
    config      = require('./config'), // Config options
    app         = express(); // Creating the express app

// Creating MongoDB Conntection
mongoose.connect(config.database.mongo_uri); 

// Conditional module loading if in development
if ('development' == app.get('env')) {
  app.use(require('errorhandler')());
  dotenv.load();
}

// Express app config options
app.use(bodyParser.json());
app.set('port', config.server.port)

// Requiring RESTful user routes
require('./routes')(app);

// Starting server
app.listen(config.server.port, function() {
  console.log('Express server listening on port ' + app.get('port') + ' in ' + app.settings.env + ' mode');
});