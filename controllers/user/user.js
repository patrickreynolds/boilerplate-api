var User = require('../../models/user');

module.exports = (function() {
  return function user(req, res, next) {
    User.findById(req.params.id, function(err, user) {
      if (err) res.send({error: "No user found with id: " + req.params.id});
      if (user) {
        console.log("\n\nReading user: " + user.username + " **\n\n");
        res.send(user);
      } else {
        res.send({error: "No user found with id: " + req.params.id});
      }
    });
  };
})();