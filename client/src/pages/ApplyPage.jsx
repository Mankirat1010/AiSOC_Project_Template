import React from "react";


export default function ApplyNowPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
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

      {/* Main Content */}
      <section className="text-center py-10 px-8 bg-blue-100">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
          <form className="space-y-4">
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/051/065/783/non_2x/apply-here-icon-simple-flat-icon-isolated-on-white-background-vector.jpg"
                className="w-60 h-32 mx-auto"
              />
              <p className="text-2xl font-semibold text-gray-800 mb-4">Project - Agriculture Technology</p>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Full Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Year"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Roll no."
              />
            </div>
            <div className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
              <label>
                Upload Photo
              </label>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
              <span className="text-gray-600 text-sm">No file chosen</span>
            </div>

            <div className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
              <label>
                Upload Resume
              </label>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
              <span className="text-gray-600 text-sm">No file chosen</span>
            </div>
            <button
              type="submit"
              className="w-full bg-mid-blue text-white px-4 py-2 rounded hover:bg-dark-blue transition duration-100">
              Submit
            </button>
          </form>
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
      </footer>
    </div>
  );
}