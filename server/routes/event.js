

const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Base route check
router.get('/', (req, res) => {
  res.send('Events API is working!');
});

// GET /events/user/:username — Fetch all events for a user
router.get('/user/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const events = await Event.find({ username });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Server error while fetching events' });
  }
});

// POST /events/create — Create new event
router.post('/create', async (req, res) => {
  const { username, title, description, start, end } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });

  try {
    const event = new Event({ username, title, description, start, end });
    await event.save();
    res.json({ success: true, event });
  } catch (err) {
    res.status(500).json({ error: 'Server error while creating event' });
  }
});

// PUT /events/update/:id — Update event by ID
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, start, end } = req.body;

  try {
    const event = await Event.findByIdAndUpdate(
      id,
      { title, description, start, end },
      { new: true }
    );
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json({ success: true, event });
  } catch (err) {
    res.status(500).json({ error: 'Server error while updating event' });
  }
});

// DELETE /events/delete/:id — Delete event by ID
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error while deleting event' });
  }
});

module.exports = router;

