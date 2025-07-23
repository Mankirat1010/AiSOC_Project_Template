import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import CreateCard from "../components/CreateProjectCard";
import CreateProject from "../components/CreateProjectCard";

export default function MyProjectsPage() {
  const projects = [
    {
      title: "DevConnect",
      description: "A developer hub to share code, collaborate, and build open-source projects online.",
      tags: ["AI/ML", "WEB DEV"],
      image: "https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148874050.jpg?semt=ais_hybrid&w=740",
    },
    {
      title: "TaskFlow",
      description: "A drag-and-drop task manager with project tracking and productivity analysis built-in.",
      tags: ["AI/ML", "WEB DEV"],
      image: "https://media.istockphoto.com/id/1360521207/photo/businessman-using-a-computer-analysis-for-process-and-workflow-automation-with-flowchart-a.jpg?s=612x612&w=0&k=20&c=18DSAkGmz3Ue7e_2UvrPpl3d4uiAF5h7q1ijnSKKJAA=",
    },
    {
      title: "CodeCraft",
      description: "A browser-based code editor supporting real-time collaboration features.",
      tags: ["AI/ML", "WEB DEV"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSlAh7mzmaNK-fEtJDZ-5V_7Lxjw45KHF8g&s",
    },
    {
      title: "SmartLens",
      description: "An AI tool that detects and labels real-world objects in uploaded images.",
      tags: ["AI/ML", "WEB DEV"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3mn1SiH_edqCE7zUQzHmdcZ-OrT5V-LGnw&s",
    },
    {
      title: "InsightIQ",
      description: "A data analytics dashboard showing ML predictions in interactive charts.",
      tags: ["AI/ML", "WEB DEV"],
      image: "https://t3.ftcdn.net/jpg/04/40/13/78/360_F_440137850_sBJOKpItVGgxB2XgCY4pxJECaU3QTEXC.jpg",
    },
    {
      title: "ChatMind",
      description: "An AI chatbot using NLP to answer queries in a natural conversation style.",
      tags: ["AI/ML", "WEB DEV"],
      image: "https://res.cloudinary.com/engineering-com/image/upload/w_640,h_640,c_limit,q_auto,f_auto/bigstock-Technology-And-Biometric-Conce-213062104_kygpiv.jpg",
    },
  ];

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
                  <Card key={index} project={project} />
              ))}
            <CreateProject />
      </section>

      <Footer />
    </div>
  );
}
