const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  carbonData: [{
    date: Date,
    activity: String,
    carbon_kg: Number
  }],
  points: { type: Number, default: 0 },
  badges: [String]
});

module.exports = mongoose.model('User', userSchema); 