import React from "react";
import { useNavigate } from "react-router-dom";
import default_project_pic from "../assets/default_project_pic.jpg"; // Make sure this file exists!

export default function Card({ project }) {
  const navigate = useNavigate();
  const tags = project.tags || [];

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img
        src={project.image || default_project_pic}
        alt={project.title || "Project Image"}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>

        {/* Only 3-4 lines shown */}
        <p className="text-sm text-gray-600 line-clamp-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 text-xs mt-2 items-center">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}

          <button
            onClick={() => navigate(`/project/${project._id}`)}
            className="ml-auto text-blue-600 text-xs hover:underline"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
