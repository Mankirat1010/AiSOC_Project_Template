import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function fetchApplications() {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/applications?userId=${userId}`
        );
        setApplications(res.data.applications || []);
      } catch (err) {
        alert("Failed to load applications");
      }
    }

    fetchApplications();
  }, [userId]);

  return (
    <div className="bg-blue-50 min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto mt-10 mb-16 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          My Applications
        </h2>

        {applications.length === 0 ? (
          <div className="text-center text-gray-500">No applications yet.</div>
        ) : (
          <div className="space-y-6">
            {applications.map((app) => {
              const project = app.project || {};
              return (
                <div
                  key={app._id}
                  className="flex items-center bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Left: Image + Title */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-gray-300">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Middle: Title + Description */}
                  <div className="flex-grow px-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title || "Untitled Project"}
                    </h3>
                    <p className="text-gray-700 mt-1 line-clamp-3">
                      {project.description || "No description available."}
                    </p>
                    {/* Add any other project details here if needed */}
                  </div>

                  {/* Right: Applied At + Status */}
                  <div className="flex flex-col items-end space-y-2 min-w-[140px]">
                    <span className="text-sm text-gray-500">
                      {new Date(app.appliedAt).toLocaleString()}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                        app.status === "accepted"
                          ? "bg-green-100 text-green-800"
                          : app.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {app.status || "pending"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
