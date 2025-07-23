import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        alert("Failed to load project details");
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!project) return <div className="text-center py-10">Project not found.</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-16 p-6 bg-white rounded-lg shadow-lg bg-blue-50">
      <h1 className="text-2xl font-bold text-black mb-4">
        {project.title}
      </h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="rounded"
        />
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="space-y-2 text-gray-600">
        <p>
          <strong>Mode :</strong> {project.mode}
        </p>
        <p>
          <strong>Skills :</strong> {project.skills?.join(", ")}
        </p>
        <p>
          <strong>Associate Faculty :</strong> {project.associateFaculty?.join(", ")}
        </p>
      </div>
      {userRole === "teacher" ? (
        <button
          onClick={() => navigate(`/applicants?projectId=${project._id}`)}
          className="mt-6 bg-mid-blue text-white px-4 py-2 rounded-lg hover:bg-dark-blue transition duration-100"
        >
          View Applicants
        </button>
      ) : (
        <button
          onClick={() => navigate(`/apply?projectId=${project._id}`)}
          className="mt-6 bg-mid-blue text-white px-4 py-2 rounded-lg hover:bg-dark-blue transition duration-100"
        >
          Apply Now
        </button>
      )}
    </div>
  );
}