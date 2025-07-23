import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function fetchApplications() {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/applications?userId=${userId}`
        );
        setApplications(res.data.applications || []);
      } catch (err) {
        alert("Failed to load applications");
      }
    }
    fetchApplications();
  }, [userId]);

  return (
    <div>
      <Header />
      <h2 className="text-2xl font-bold my-6 text-center">My Applications</h2>
      <div className="max-w-3xl mx-auto">
        {applications.length === 0 ? (
          <div className="text-center text-gray-500">No applications yet.</div>
        ) : (
          <table className="w-full border">
            <thead>
              <tr>
                <th>Project</th>
                <th>Status</th>
                <th>Applied At</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app._id}>
                  <td>{app.project?.title || "N/A"}</td>
                  <td>{app.status}</td>
                  <td>{new Date(app.appliedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </div>
  );
}