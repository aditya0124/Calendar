const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  username: { type: String, required: true }, // link event to user
  title: { type: String, required: true },
  description: String,
  start: { type: Date, required: true },
  end: { type: Date, required: true },

});

module.exports = mongoose.model('Event', eventSchema);
