var User = require('../../models/user');

module.exports = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) res.json({error: "No user found with id: " + req.params.id})
    if (user) {
      console.log("\n\nReading user: " + user.username + " **\n\n")
      res.json(user);
    } else {
      res.json({error: "No user found with id: " + req.params.id})
    }
  })
}