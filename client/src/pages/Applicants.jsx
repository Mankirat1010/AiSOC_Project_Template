import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import defaultProjectPic from "../assets/default_project_pic.jpg";
import axios from "axios";

export default function ApplicantsPage() {
  const search = new URLSearchParams(window.location.search);
  const projectId = search.get("projectId");

  const [project, setProject] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchApplicantsAndProject() {
      setLoading(true);
      try {
        // Fetch applicants
        const appRes = await axios.get(
          `http://localhost:5000/api/applications?projectId=${projectId}`
        );
        setApplicants(appRes.data.applications || []);

        // Fetch project details
        const projRes = await axios.get(
          `http://localhost:5000/api/projects/${projectId}`
        );
        setProject(projRes.data || null);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    }

    if (projectId) {
      fetchApplicantsAndProject();
    }
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
                src={project.image || defaultProjectPic}
                alt={project.title}
                className="rounded w-full h-auto object-cover max-h-60"
              />
              <div>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Mode:</strong> {project.mode || "N/A"}
                  </p>
                  <p>
                    <strong>Skills:</strong> {project.skills?.join(", ") || "N/A"}
                  </p>
                  <p>
                    <strong>Associate Faculty:</strong>{" "}
                    {project.associateFaculty?.join(", ") || "N/A"}
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
                  <th className="px-4 py-2 border">Branch</th>
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
                    <td className="px-4 py-2 border">{app.branch || "-"}</td>
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

                  <td className="px-4 py-2 border">
  {app.status === "accepted" ? (
    <span className="text-green-600 font-semibold">ACCEPTED</span>
  ) : app.status === "rejected" ? (
    <span className="text-red-600 font-semibold">REJECTED</span>
  ) : (
    <div className="flex gap-1">
      <button
        className="flex-1 bg-green-500 text-white px-3 py-1 rounded text-sm"
        onClick={async () => {
          await axios.patch(
            `http://localhost:5000/api/applications/${app._id}/status`,
            { status: "accepted" }
          );
          setApplicants((prev) =>
            prev.map((a) =>
              a._id === app._id ? { ...a, status: "accepted" } : a
            )
          );
        }}
      >
        Accept
      </button>
      <button
        className="flex-1 bg-red-500 text-white px-3 py-1 rounded text-sm"
        onClick={async () => {
          await axios.patch(
            `http://localhost:5000/api/applications/${app._id}/status`,
            { status: "rejected" }
          );
          setApplicants((prev) =>
            prev.map((a) =>
              a._id === app._id ? { ...a, status: "rejected" } : a
            )
          );
        }}
      >
        Reject
      </button>
    </div>
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
