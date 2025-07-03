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
    <div className="bg-blue-50 min-h-screen">
      {/* Navbar */}
<nav className="bg-white shadow-md flex justify-between items-center px-8">
  <div className="text-xl font-bold text-blue-600">
    <img
      src="https://dicpu.in/images/dic/diclogobg.png"
      className="w-12 h-12 mx-auto"
    />
  </div>
  <div className="flex items-center">
    <ul className="flex gap-7 text-sm font-medium text-black">
      <li className="hover:text-dark-blue cursor-pointer">HOME</li>
      <li className="hover:text-dark-blue cursor-pointer">ABOUT</li>
      <li className="text-mid-blue hover:text-dark-blue cursor-pointer">PROJECTS</li>
      <li className="hover:text-dark-blue cursor-pointer">MY APPLICATIONS ▾</li>
    </ul>
    <button className="bg-mid-blue text-white px-6 py-5 rounded-none hover:bg-dark-blue hover:text-white after:content-['→'] after:ml-1 ml-4">
      Log Out
    </button>
  </div>
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
          <button className="bg-mid-blue text-white px-6 py-2 rounded hover:bg-dark-blue">Search</button>
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
      <footer className="bg-dark-gray text-white py-10 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
           <h4 className="font-semibold mb-2 text-xl">Quick Link</h4>
           <ul className="space-y-1">
              <li className="before:content-['>'] before:mr-2 before:text-white">About Us</li>
              <li className="before:content-['>'] before:mr-2 before:text-white">Contact Us</li>
             <li className="before:content-['>'] before:mr-2 before:text-white">Privacy Policy</li>
              <li className="before:content-['>'] before:mr-2   before:text-white">Terms & Condition</li>
              <li className="before:content-['>'] before:mr-2 before:text-white">FAQs & Help</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-xl">Contact</h4>
            <p>DIC, UIET, Panjab University, Chandigarh</p>
            <p>+91 98765 43210</p>
            <p>dic@uiet.puchd.ac.in</p>
            <div className="flex gap-3 mt-2">
              <span>🔗</span><span>📘</span><span>🐦</span><span>📸</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-xl">Gallery</h4>
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
            <h4 className="font-semibold mb-2 text-xl">Newsletter</h4>
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
      <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
        <div></div> {/* Empty div to balance layout */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Cookies</a>
          <a href="#" className="hover:text-white">Help</a>
          <a href="#" className="hover:text-white">FAQs</a>
        </div>
        <a href="#" className="text-dark-blue hover:text-mid-blue text-3xl bg-white px-4 py-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </a>
      </div>
      </footer>
    </div>
  );
}
