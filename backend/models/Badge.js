const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  criteria: { type: String }, // e.g., 'Saved 10kg CO2 in a week'
  icon: { type: String } // URL or icon name
});

module.exports = mongoose.model('Badge', badgeSchema); 