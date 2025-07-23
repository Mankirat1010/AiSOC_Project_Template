import React from "react";
import CreateProject from "../components/CreateProject";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CreateProjectPage() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Create New Project</h1>
        <CreateProject />
      </div>
      <Footer />
    </>
  );
}
