
const express = require('express');
const router = express.Router();
const User = require('../models/User');
// const Event = require('../models/Event'); 

// POST /user/login
router.post('/login', async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  try {
    let user = await User.findOne({ username });

    if (!user) {
      user = new User({ username });
      await user.save();
    }

    const events = await Event.find({ username });

    res.json({
      success: true,
      username: user.username,
      events
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
