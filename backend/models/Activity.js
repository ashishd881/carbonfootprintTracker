const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, required: true }, // e.g., travel, energy, food
  details: { type: String },
  carbon_kg: { type: Number, required: true }
});

module.exports = mongoose.model('Activity', activitySchema); 