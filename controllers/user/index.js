module.exports = {
  // POST /users - Create a new user
  create: require('./create'),

  // GET /users/:id - Read user by id
  user: require('./user'),

  // GET /users - Read all users
  users: require('./users'),

  // PUT /users/:id - Update user by id
  update: require('./update'),

  // DELETE /users/:id - Delete user by id
  deleteUser: require('./delete')
}