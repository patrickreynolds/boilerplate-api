var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto'); // TODO
var bcrypt = require('bcrypt'); // TODO

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    unique: true,
    sparse: true
  },
  updated_at: {
    type: Number
  },
  created_at: {
    type: Number
  }
});

module.exports = mongoose.model('User', userSchema);