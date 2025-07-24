import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import CreateProject from "../components/CreateProjectCard";
import axios from "axios";

export default function MyProjectsPage() {
  const [projects, setProjects] = useState([]);
  const teacherId = localStorage.getItem("userId");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/projects?teacher=${teacherId}`
        );
        setProjects(res.data);
      } catch (err) {
        alert("Failed to load your projects");
      }
    }
    fetchProjects();
  }, [teacherId]);

  return (
    <div className="bg-blue-50 min-h-screen ">
      <Header />

      {/* Heading */}
      <div className="text-center py-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">My Published Projects</h2>
        <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
      </div>

      {/* Projects Grid */}
      <section className="px-8 pb-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={project._id || index} project={project} />
        ))}
        <CreateProject />
      </section>

      <Footer />
    </div>
  );
}