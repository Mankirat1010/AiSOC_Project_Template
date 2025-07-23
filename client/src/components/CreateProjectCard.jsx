import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/project/create")}
      className="cursor-pointer flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
      style={{ minHeight: "300px" }}
      title="Create New Project"
    >
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full border-4 border-dashed border-blue-500 text-blue-500 text-4xl font-bold">
        +
      </div>
      <h3 className="text-lg font-semibold text-blue-600">Create New Project</h3>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Click here to add a new project.
      </p>
    </div>
  );
}
