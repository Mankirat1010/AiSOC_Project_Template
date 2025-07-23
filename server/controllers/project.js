const Project = require('../models/Project');

async function createProject(req, res) {
    try {
        const { title, description, image, mode, skills, associateFaculty, teacher } = req.body;
        if (!title || !description || !teacher) return res.status(400).json({ error: 'Missing fields' });

        const newProject = await Project.create({
            title,
            description,
            image,
            mode,
            skills,
            associateFaculty,
            teacher,
        });

        res.status(201).json(newProject);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to create project' });
    }
}

async function getAllProjects(req, res) {
    try {
        const projects = await Project.find().populate('teacher', 'name email');
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
}

async function getProjectById(req, res) {
    try {
        const project = await Project.findById(req.params.id).populate('teacher', 'name email');
        if (!project) return res.status(404).json({ error: 'Project not found' });
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch project' });
    }
}

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
};