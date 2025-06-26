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
    tags: [{
         type: String,
    }],
    lastDateToApply: {
        type: Date, 
        required: true,
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;