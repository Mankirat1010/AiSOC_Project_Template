import React from "react";

export default function ApplyNowPage() {
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

      {/* Main Content */}
      <section className="text-center py-10 px-8 bg-blue-200">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
          <form className="space-y-4">
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/051/065/783/non_2x/apply-here-icon-simple-flat-icon-isolated-on-white-background-vector.jpg"
                className="w-60 h-32 mx-auto"
              />
              <h6 className="text-3xl font-semibold text-gray-800 mb-4">Project - Agriculture Technology</h6>
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
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-8">
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