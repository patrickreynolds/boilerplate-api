var User = require('../../models/user');

module.exports = function(req, res) {
  User.remove({
    _id: req.params.id
  }, function(err, user) {
    if (err) res.json(err)
    console.log('\n\n** Deleted user with id ' + req.params.id + ' **\n\n')
    res.json({status: "Deleted user " + req.params.id})
  })
}