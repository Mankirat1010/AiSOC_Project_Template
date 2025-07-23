import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

export default function ApplicantsPage() {
  // For demo, hardcode projectId or get from route params
  const projectId = "YOUR_PROJECT_ID_HERE"; // Replace with actual logic

  const [project, setProject] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Fetch project details
        const projRes = await axios.get(
          `http://localhost:5000/api/projects/${projectId}`
        );
        setProject(projRes.data);

        // Fetch applicants for this project
        const appRes = await axios.get(
          `http://localhost:5000/api/applications?project=${projectId}`
        );
        setApplicants(appRes.data.applications || []);
      } catch (err) {
        alert("Failed to load data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [projectId]);

  return (
    <div className="bg-blue-100 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto mt-10 mb-16 p-6 bg-white rounded-lg shadow-lg">
        {/* Project Details */}
        {project ? (
          <>
            <h1 className="text-2xl font-bold text-black mb-4">
              {project.title}
            </h1>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="rounded"
              />
              <div>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Mode :</strong> {project.mode}
                  </p>
                  <p>
                    <strong>Skills :</strong> {project.skills?.join(", ")}
                  </p>
                  <p>
                    <strong>Associate Faculty :</strong>{" "}
                    {project.associateFaculty?.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>Loading project details...</div>
        )}

        {/* Applicants List */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Applicants</h2>
        {loading ? (
          <div>Loading applicants...</div>
        ) : applicants.length === 0 ? (
          <div className="text-gray-500">No applicants yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Roll Number</th>
                  <th className="px-4 py-2 border">Year</th>
                  <th className="px-4 py-2 border">Motivation</th>
                  <th className="px-4 py-2 border">Resume</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((app) => (
                  <tr key={app._id}>
                    <td className="px-4 py-2 border">{app.applicant?.name || "-"}</td>
                    <td className="px-4 py-2 border">{app.rollNumber}</td>
                    <td className="px-4 py-2 border">{app.year}</td>
                    <td className="px-4 py-2 border">{app.motivation}</td>
                    <td className="px-4 py-2 border">
                      {app.resumeUrl ? (
                        <a
                          href={app.resumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View Resume
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}