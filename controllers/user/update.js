var User = require('../../models/user');

module.exports = (function() {
  return function update(req, res, next) {
    User.findById(req.params.id, function(err, user) {
      if (err) res.json(err);

      user.username = req.body.username;
      user.email    = req.body.email;
      user.password = req.body.password;

      var updatedUser = user;
      user.save(function(err) {
        if (err) res.json(err);
        console.log("\n\n** Updated " + updatedUser.username + " **\n\n");
      });
    });
  };
})();
