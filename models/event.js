const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: String,
  location: String,
  summary: String,
  date: Date,
  timeofevent: String
})

module.exports.Event = mongoose.model('Event', eventSchema)