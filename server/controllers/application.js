const Application = require('../models/Application');

async function createApplication(req, res) {
    console.log("BODY:", req.body);
    try {
        const { userId, projectId, rollNumber, year, motivation, resumeUrl } = req.body;

        if (!userId || !projectId || !rollNumber) {
          return res.status(400).json({ error: "Missing required fields" });
        }

        // Check if user already applied to same project (optional)
        const existing = await Application.findOne({ project: projectId, applicant: userId });
        if (existing) return res.status(400).json({ error: "Already applied for this project" });

        // create new application document
        const application = new Application({
            applicant: userId,
            project: projectId,
            rollNumber,
            year,
            motivation,
            resumeUrl,
            appliedAt: new Date(),
        });

        await application.save();

        res.status(201).json({ message: "Application created successfully", application });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


async function getApplicationsByUser(req, res) {
  try {
    const { userId } = req.query;
    const applications = await Application.find({ applicant: userId }).populate('project');
    res.json({ applications });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applications" });
  }
}

module.exports = {
  createApplication,
  getApplicationsByUser,
};