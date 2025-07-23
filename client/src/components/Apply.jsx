import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ApplyProject({ projectId }) {
  const [formData, setFormData] = useState({
    fullName: "",
    year: "",
    rollNumber: "",
    motivation: "",
  });

  const [photoFile, setPhotoFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  // To show file names after selection
  const [photoName, setPhotoName] = useState("No file chosen");
  const [resumeName, setResumeName] = useState("No file chosen");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    if (e.target.files.length > 0) {
      setPhotoFile(e.target.files[0]);
      setPhotoName(e.target.files[0].name);
    }
  };

  const handleResumeChange = (e) => {
    if (e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
      setResumeName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const userId = localStorage.getItem("userId");

  // Use FormData to send files and fields
  const form = new FormData();
  form.append("userId", userId);
  form.append("projectId", projectId);
  form.append("fullName", formData.fullName);
  form.append("year", formData.year);
  form.append("rollNumber", formData.rollNumber);
  form.append("motivation", formData.motivation);
  if (resumeFile) form.append("resume", resumeFile);

  try {
    await axios.post(
      "http://localhost:5000/api/applications/create",
      form,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert("Application submitted!");
    // Optionally redirect here
  } catch (err) {
    alert(err.response?.data?.error || "Failed to submit application.");
  }
};

  return (
    <section className="text-center py-10 px-8 bg-blue-100">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/051/065/783/non_2x/apply-here-icon-simple-flat-icon-isolated-on-white-background-vector.jpg"
              className="w-60 h-32 mx-auto"
              alt="Apply icon"
            />
            {/* You can display project title dynamically if passed as prop */}
            {/* <p className="text-2xl font-semibold text-gray-800 mb-4">{projectTitle}</p> */}
          </div>

          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Full Name"
            />
          </div>

          {/* Year */}
          <div>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Year"
            />
          </div>

          {/* Roll Number */}
          <div>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Roll no."
            />
          </div>

          {/* Motivation */}
          <div>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Why do you want to join this project?"
              rows={3}
            />
          </div>

          {/* Upload Resume */}
          <div className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400">
            <label className="block mb-1 font-semibold cursor-pointer">
              Upload Resume
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              id="resume-upload"
              onChange={handleResumeChange}
            />
            <label
              htmlFor="resume-upload"
              className="inline-block px-4 py-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
            >
              Choose File
            </label>
            <span className="ml-2 text-gray-600 text-sm">{resumeName}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-mid-blue text-white px-4 py-2 rounded hover:bg-dark-blue transition duration-100"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
