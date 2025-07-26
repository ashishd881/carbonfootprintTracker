const express = require('express');
const router = express.Router();

// Example route
router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

router.use('/auth', require('./auth'));
router.use('/activity', require('./activity'));
router.use('/leaderboard', require('./leaderboard'));

module.exports = router; 