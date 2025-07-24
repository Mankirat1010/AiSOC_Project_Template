const Application = require('../models/Application');

async function createApplication(req, res) {
  console.log("BODY:", req.body);

  try {
    const {
      userId,
      projectId,
      rollNumber,
      year,
      motivation,
      resumeUrl, // or handle file uploads separately
      branch, // ✅ Include branch from the frontend
    } = req.body;

    if (!userId || !projectId || !rollNumber) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Optional: Check if already applied
    const existing = await Application.findOne({
      project: projectId,
      applicant: userId,
    });

    if (existing) {
      return res.status(400).json({ error: "Already applied for this project" });
    }

    // ✅ Create new application
    const application = new Application({
      applicant: userId,
      project: projectId,
      rollNumber,
      year,
      branch, // ✅ Save branch
      motivation,
      resumeUrl,
      appliedAt: new Date(),
    });

    await application.save();

    res.status(201).json({
      message: "Application created successfully",
      application,
    });

  } catch (error) {
    console.error("Error creating application:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// server/controllers/application.js
async function getApplicationsByUserOrProject(req, res) {
  try {
    const { userId, projectId } = req.query;
    let filter = {};
    if (userId) filter.applicant = userId;
    if (projectId) filter.project = projectId;
    // Populate applicant to get name and other details
    const applications = await Application.find(filter).populate('project');
    res.json({ applications });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applications" });
  }
}

async function updateApplicationStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body; // status should be "accepted" or "rejected"
    const application = await Application.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.json({ application });
  } catch (error) {
    res.status(500).json({ error: "Failed to update status" });
  }
}


module.exports = {
  createApplication,
  getApplicationsByUserOrProject,
  updateApplicationStatus,
};
