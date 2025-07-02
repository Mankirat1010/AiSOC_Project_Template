import React from "react";

export default function ProjectsPage() {
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
      image: "data:image/jpeg;base64,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",
    },
    {
      title: "ChatMind",
      description: "An AI chatbot using NLP to answer queries in a natural conversation style.",
      tags: ["AI/ML", "WEB DEV"],
      image: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center px-8">
        <div className="text-xl font-bold text-blue-600"><img
          src="https://media.licdn.com/dms/image/v2/C510BAQG816-s7iwQpg/company-logo_200_200/company-logo_200_200/0/1630617965677?e=2147483647&v=beta&t=x06SrcPLaNpyBgJynNdVlCj75NkGuQKHiqkFkVdf7fo"
          className="w-10 h-10 mx-auto"
        /></div>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="hover:text-blue-600 cursor-pointer">Resources ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400">
          Log Out
        </button>
      </nav>

      {/* Title and Filters */}
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
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Search</button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 pb-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs mt-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
                <button className="ml-auto text-blue-600 text-xs hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Quick Link</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>FAQs & Help</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>DIC, UIET, Panjab University, Chandigarh</p>
            <p>+91 98765 43210</p>
            <p>dic@uiet.puchd.ac.in</p>
            <div className="flex gap-3 mt-2">
              <span>🔗</span><span>📘</span><span>🐦</span><span>📸</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Gallery</h4>
            <div className="grid grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6].map(n => (
                <img
                  key={n}
                  src={`https://via.placeholder.com/50x50?text=Img${n}`}
                  alt={`Gallery ${n}`}
                  className="rounded"
                />
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <p className="mb-2">Dolor amet sit justo amet elitr ipsum elitr et.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 w-full rounded-l bg-gray-100 text-black focus:outline-none"
              />
              <button className="bg-teal-500 px-4 py-2 rounded-r text-white hover:bg-teal-600">
                SignUp
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-6 text-gray-400">
          © Your Site Name, All Right Reserved. Designed by HTML Codex | Distributed by ThemeWagon
        </div>
      </footer>
    </div>
  );
}
