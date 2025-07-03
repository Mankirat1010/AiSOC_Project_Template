import React from "react";

export default function MyProjectsPage() {
  const projects = [
    {
      name: "EduSphere",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3V8DNtvNqpn56lI2LYh_qqLfqEm9kRNfVVA&s",
    },
    {
      name: "AuthShield",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXV6ZiYVMbccnt-iqcYqXtGUgfs1JJZEJMAA&s",
    },
    {
      name: "CodeNest",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkHd9lTyJD-x0habI8OV8nRhL26H7QE0-hw&s",
    },
    {
      name: "MedSync",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ17WC3zMPegLXyj8sHyjHkSURnbT3ZtZWgA&s",
    },
    {
      name: "FormEase",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4Q25MYvgKeSgtED-Cse4WKkqOoFSWaf02Q&s",
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen ">
      {/* Navbar */}
<nav className="bg-white shadow-md p-4 flex justify-between items-center px-8">
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
      <li className="hover:text-dark-blue cursor-pointer">PROJECTS ▾</li>
      
      <li className="hover:text-dark-blue cursor-pointer">POST NEW</li>
    </ul>
    <button className="bg-mid-blue text-white px-6 py-2 rounded-none hover:bg-dark-blue hover:text-white after:content-['→'] after:ml-1 ml-4">
      Log Out
    </button>
  </div>
</nav>

      {/* Heading */}
      <div className="text-center py-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">My Published Projects</h2>
        <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
      </div>

      {/* Project Cards */}
      <section className="px-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="bg-gray-800 text-white text-center py-3 relative">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <div className="flex justify-center gap-3 mt-2">
                <button className="bg-teal-500 px-3 py-1 rounded text-sm hover:bg-teal-600">
                  Edit
                </button>
                <button className="bg-red-500 px-3 py-1 rounded text-sm hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Project Card */}
        <div className="border-2 border-blue-300 border-dashed flex flex-col items-center justify-center rounded text-blue-500 hover:bg-blue-100 cursor-pointer">
          <div className="text-4xl">+</div>
          <p className="mt-2 font-medium">Add New Project</p>
        </div>
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
