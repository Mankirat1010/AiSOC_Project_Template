import React from "react";

export default function ProjectPage() {
  return (
    <div className="bg-blue-100 min-h-screen">
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
      <li className="text-mid-blue hover:text-dark-blue cursor-pointer">HOME</li>
      <li className="hover:text-dark-blue cursor-pointer">ABOUT</li>
      <li className="hover:text-dark-blue cursor-pointer">PROJECTS</li>
      <li className="hover:text-dark-blue cursor-pointer">RESOURCES ▾</li>
      <li className="hover:text-dark-blue cursor-pointer">CONTACT</li>
    </ul>
    <button className="bg-mid-blue text-white px-6 py-5 rounded-none hover:bg-dark-blue hover:text-white after:content-['→'] after:ml-1 ml-4">
      Join DIC
    </button>
  </div>
</nav>
    
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg bg-blue-50">
        <h1 className="text-2xl font-bold text-black mb-4">Project : Lorem Ipsum about content</h1>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsn6_FmNoLEJFVsULyxkhzDpsYnj3NFju3w&s" alt="Project Image 1" className="rounded" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsn6_FmNoLEJFVsULyxkhzDpsYnj3NFju3w&s" alt="Project Image 2" className="rounded" />
        </div>
        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="space-y-2 text-gray-600">
          <p><strong>Mode :</strong> Lorem</p>
          <p><strong>Skills :</strong> Lorem,Ipsum,Text</p>
          <p><strong>Associate Faculty :</strong> Lorem</p>
        </div>
        <button className="mt-6 bg-mid-blue text-white px-4 py-2 rounded-lg hover:bg-dark-blue transition duration-100">
          Apply Now
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-dark-gray text-white py-10 px-8 mt-10">
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
      </footer>
    </div>
  );
}