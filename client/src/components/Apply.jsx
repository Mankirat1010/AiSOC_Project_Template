import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ApplyProject({ projectId }) {
  const [formData, setFormData] = useState({
    fullName: "",
    year: "",
    rollNumber: "",
    motivation: "",
  });

  const [branch, setBranch] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeName, setResumeName] = useState("No file chosen");

  const navigate = useNavigate();

  // ✅ Redirect to login if not logged in
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    const form = new FormData();
    form.append("userId", userId);
    form.append("projectId", projectId);
    form.append("fullName", formData.fullName);
    form.append("year", formData.year);
    form.append("rollNumber", formData.rollNumber);
    form.append("motivation", formData.motivation);
    form.append("branch", branch);
    if (resumeFile) form.append("resume", resumeFile);

    try {
      await axios.post("http://localhost:5000/api/applications/create", form, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Application submitted!");
      navigate("/my-applications"); // Redirect after successful submission
    } catch (err) {
      alert(err.response?.data?.error || "Failed to submit application.");
    }
  };

  return (
    <section className="text-center py-10 px-8 bg-blue-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/051/065/783/non_2x/apply-here-icon-simple-flat-icon-isolated-on-white-background-vector.jpg"
              className="w-60 h-32 mx-auto"
              alt="Apply icon"
            />
          </div>

          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Full Name"
          />

          {/* Year */}
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Year"
          />

          {/* Branch */}
          <select
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="BIOTECH">BIOTECH</option>
          </select>

          {/* Roll Number */}
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Roll Number"
          />

          {/* Motivation */}
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Why do you want to join this project?"
            rows={3}
            required
          />

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
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-100"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
