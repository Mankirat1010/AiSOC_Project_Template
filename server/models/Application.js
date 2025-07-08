const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Extra fields for application details:
  rollNumber: { 
    type: String, required: true 
  },
  year: { 
    type: String
  },                 
  motivation: { 
    type: String 
  },            
  resumeUrl: { 
    type: String 
  },             // Link to uploaded resume 
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
