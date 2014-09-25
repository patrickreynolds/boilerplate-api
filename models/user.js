var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    sparse: true
  },
  updated_at: {
    type: Number
  },
  created_at: {
    type: Number
  }
});

module.exports = mongoose.model('User', userSchema)