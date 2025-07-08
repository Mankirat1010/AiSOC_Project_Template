const Project = require('../models/Project');

async function createProject(req, res) {
    try {
        const newProject = await Project.create(req.body);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create project' });
    }
}

module.exports = {
    createProject,
};
