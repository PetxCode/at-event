const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Participant', participantSchema);
