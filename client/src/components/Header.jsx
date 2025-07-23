import React from "react";
import StudentProfileDropdown from "./ProfileDropdown";

export default function Header() {
  return (
    <nav className="bg-white shadow-md flex justify-between items-center px-8 py-3">
      
      {/* Left: Logo */}
      <div className="text-xl font-bold text-blue-600">
        <img
          src="https://dicpu.in/images/dic/diclogobg.png"
          className="w-36 h-12"
          alt="DIC Logo"
        />
      </div>

      {/* Right: Navigation and Profile */}
      <div className="flex items-center gap-6">
        
        {/* Navigation Links */}
        <ul className="flex gap-7 text-sm font-medium text-black">
          <li className="hover:text-dark-blue cursor-pointer">HOME</li>
          <li className="hover:text-dark-blue cursor-pointer">ABOUT</li>
          <li className="hover:text-dark-blue cursor-pointer">PROJECTS</li>
          <li className="hover:text-dark-blue cursor-pointer">MY APPLICATIONS ▾</li>
        </ul>

        {/* Logout Button */}
        <button className="bg-mid-blue text-white px-4 py-2 rounded hover:bg-dark-blue transition">
          Log Out
        </button>

        {/* Avatar / Profile Dropdown */}
        <StudentProfileDropdown />
      </div>
    </nav>
  );
}
