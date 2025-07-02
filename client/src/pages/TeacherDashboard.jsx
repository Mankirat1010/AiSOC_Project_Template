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
    <div className="bg-gray-100 min-h-screen ">
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
            <div className="bg-gray-900 text-white text-center py-3 relative">
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
        <div className="border-2 border-blue-300 border-dashed flex flex-col items-center justify-center rounded text-blue-500 hover:bg-blue-50 cursor-pointer">
          <div className="text-4xl">+</div>
          <p className="mt-2 font-medium">Add New Project</p>
        </div>
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
