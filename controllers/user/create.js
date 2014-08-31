var User = require('../../models/user')

module.exports = (function() {
  return function create(req, res, next) {
    
    var newUser = new User();
    newUser.username    = req.body.username;
    newUser.email       = req.body.email;
    newUser.password    = req.body.password;
    newUser.created_at  = Date.now();
    newUser.updated_at  = Date.now();

    newUser.save(function(err) {
      if (err) res.send(err);
      console.log("** Created " + newUser.username + " **");
      res.send({status: "Created: " + req.body.username})
    });
  };
})();
