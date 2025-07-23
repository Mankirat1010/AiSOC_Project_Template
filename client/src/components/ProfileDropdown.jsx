import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // Get user info from localStorage
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  const userRole = localStorage.getItem("userRole");

  // Hide if not logged in
  if (!userName || !userEmail) return null;

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to handle the "My Projects" button click
  const handleProjectsClick = () => {
    if (userRole === "teacher") {
      navigate("/teacher");
    } else if (userRole === "student") {
      navigate("/projects");
    }
  };

  return (
    <div className="relative ml-3" ref={dropdownRef}>
      <img
        src="https://i.pravatar.cc/40"
        alt="Avatar"
        className="w-10 h-10 rounded-full cursor-pointer border"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 z-50">
          <p className="px-4 py-2 text-sm text-gray-800">👤 {userName}</p>
          <p className="px-4 text-xs text-gray-500">{userEmail}</p>
          <hr className="my-2" />
          <button
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            onClick={handleProjectsClick}
          >
            My Projects
          </button>
          <button
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}