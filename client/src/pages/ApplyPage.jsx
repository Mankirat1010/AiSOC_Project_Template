import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplyProject from "../components/Apply";
import { useLocation } from "react-router-dom";

export default function ApplyNowPage() {
  const search = new URLSearchParams(useLocation().search);
  const projectId = search.get("projectId");

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <ApplyProject projectId={projectId} />
      <Footer />
    </div>
  );
}