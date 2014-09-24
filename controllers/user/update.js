var User = require('../../models/user');

module.exports = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) res.json(err)

    user.username   = req.body.username
    user.email      = req.body.email
    user.password   = req.body.password
    user.updated_at = Date.now()

    var updatedUser = user
    user.save(function(err) {
      if (err) res.json(err)
      console.log("\n\n** Updated " + updatedUser.username + " **\n\n")
    })
  })
}
