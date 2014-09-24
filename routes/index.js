var controllers = require('../controllers')
var user = controllers.user

module.exports = function(app) {

  // GET / - Home route for testing
  app.get('/', function(req, res) {
    res.send({motive: "Managing users with node."});
  })

  // TODO: namespace to users
  // POST /users - Create user with attributes
  app.post('/users', user.create)

  // GET /users/:id - Read specific user by id
  app.get('/users/:id', user.user)
  
  // GET /users - Read all users
  app.get('/users', user.users)
  
  // PUT /users/:id - Update user by id
  app.put('/users/:id', user.update)
  
  // DELETE /users/:id - Delete user by id
  app.delete('/users/:id', user.deleteUser)
};