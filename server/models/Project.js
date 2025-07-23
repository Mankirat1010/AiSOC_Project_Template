const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: false, // Optional but can be made required based on use-case
  },

  mode: {
  type: String,
  enum: ['Online', 'Offline', 'Dual'],
  required: true,
  },

  skills: [{ type: String }],

  associateFaculty: [{ type: String }],

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true, // Ensures project is linked to a teacher
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', projectSchema);
