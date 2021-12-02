const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: Array, required: true },
});

module.exports = mongoose.model('User', userSchema);
