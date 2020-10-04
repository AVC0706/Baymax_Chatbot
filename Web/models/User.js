const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  allergies: {
    type: String,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  healthissue: {
    type: String,
  },
  details: {
    type: Boolean,
  },
});

module.exports = mongoose.model('user', userSchema);
