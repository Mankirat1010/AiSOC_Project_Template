import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    mode: "",
    skills: "",
    associateFaculty: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const teacherId = localStorage.getItem("userId");

  // 👇 ADD THIS CHECK HERE
  if (!teacherId) {
    alert("You must be logged in as a teacher to post a project.");
    return;
  }

  // Convert skills and associateFaculty to arrays
  const projectData = {
    ...formData,
    skills: formData.skills
      ? formData.skills.split(",").map((skill) => skill.trim())
      : [],
    associateFaculty: formData.associateFaculty
      ? formData.associateFaculty.split(",").map((f) => f.trim())
      : [],
    teacher: teacherId,
  };

  console.log("Final projectData sent:", projectData);

  try {
    await axios.post("http://localhost:5000/api/projects/create", projectData, {
      withCredentials: true,
    });

    alert("Project created successfully!");
    navigate("/teacher");
  } catch (err) {
      console.error("Submission error:", err);
      console.log("Backend response:", err.response?.data); 

      alert(err.response?.data?.error || "Failed to create project.");
}
};


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold mb-1">Project Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Enter project title"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Describe your project"
          rows={4}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Image URL</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Enter image URL"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Mode</label>
        <select
          name="mode"
          value={formData.mode}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Select mode</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
          <option value="Dual">Dual</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1">Skills (comma separated)</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="e.g. React, Node.js, CSS"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Associate Faculty</label>
        <input
          type="text"
          name="associateFaculty"
          value={formData.associateFaculty}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Faculty name"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Post Project
      </button>
    </form>
  );
}