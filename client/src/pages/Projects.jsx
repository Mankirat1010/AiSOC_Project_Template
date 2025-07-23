import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Search from "../components/Search";
import axios from "axios";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from backend
  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (err) {
        alert("Failed to load projects");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      <Header />
      <Search />
      {/* Projects Grid */}
      <section className="px-8 pb-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          projects.map((project, index) => (
            <Card key={project._id || index} project={project} />
          ))
        )}
      </section>
      <Footer />
    </div>
  );
}