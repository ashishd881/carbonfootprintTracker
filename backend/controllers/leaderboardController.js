const User = require('../models/User');

exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 }).limit(10).select('username points');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}; 