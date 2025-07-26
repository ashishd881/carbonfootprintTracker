const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  criteria: { type: String }, // e.g., 'Bike to work every day'
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  completed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Challenge', challengeSchema); 