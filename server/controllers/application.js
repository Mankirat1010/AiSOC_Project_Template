const Application = require('../models/application');

async function createApplication(req, res) {
    try {
        const { userId, projectId, resumeLink } = req.body;  // example fields, adjust as per your schema

        // create new application document
        const application = new Application({
            user: userId,
            project: projectId,
            resume: resumeLink,
            appliedAt: new Date(),
        });

        await application.save();

        res.status(201).json({ message: "Application created successfully", application });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    createApplication,
};
