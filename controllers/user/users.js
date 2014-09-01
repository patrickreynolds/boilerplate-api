var User = require('../../models/user');

module.exports = (function() {
  return function users(req, res, next) {
    console.log("Reading all users")
    User.find(function(err, users) {
      if (err) res.json(err);
      console.log("\n\n** Retrieving all users **\n\n");
      res.json(users);
    });
  };
})();
