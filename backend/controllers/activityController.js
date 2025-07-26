const Activity = require('../models/Activity');
const User = require('../models/User');
const { calculateCarbon } = require('../services/carbonApi');
const { calculatePoints, getBadges } = require('../utils/gamification');

exports.logActivity = async (req, res) => {
  try {
    const { type, details } = req.body;
    const userId = req.user.id;
    // Calculate carbon footprint
    const { carbon_kg } = await calculateCarbon({ type, details });
    // Create activity
    const activity = await Activity.create({ user: userId, type, details, carbon_kg });
    // Update user
    const user = await User.findById(userId);
    user.carbonData.push({ date: new Date(), activity: type, carbon_kg });
    user.points += calculatePoints(carbon_kg);
    user.badges = getBadges(user);
    await user.save();
    res.status(201).json({ message: 'Activity logged', activity });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getActivities = async (req, res) => {
  try {
    const userId = req.user.id;
    const activities = await Activity.find({ user: userId }).sort({ date: -1 });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}; 