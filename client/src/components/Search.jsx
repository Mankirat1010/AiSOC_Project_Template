import React from "react";

export default function Search() {
    return (
        <section className="text-center py-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">PROJECTS</h2>
        <div className="flex justify-center gap-4 flex-wrap px-4">
          <input
            type="text"
            placeholder="Search projects..."
            className="px-4 py-2 rounded border w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Filter by</option>
            <option>AI/ML</option>
            <option>Web Dev</option>
          </select>
          <button className="bg-mid-blue text-white px-6 py-2 rounded hover:bg-dark-blue">Search</button>
        </div>
      </section>
    );
}