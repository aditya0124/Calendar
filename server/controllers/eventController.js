const Event = require('../models/Event');

const getEvents = async (req, res) => {
  const { username } = req.params;
  const events = await Event.find({ username });
  res.json(events);
};

const createEvent = async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).json(event);
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const updated = await Event.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  await Event.findByIdAndDelete(id);
  res.json({ success: true });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
