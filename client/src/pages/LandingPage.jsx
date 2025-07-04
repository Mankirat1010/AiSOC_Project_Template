import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md flex justify-between items-center px-8">
        <div className="text-xl font-bold text-blue-600">
          <img
            src="https://dicpu.in/images/dic/diclogobg.png"
            className="w-16 h-15 mx-auto"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex gap-11 text-sm font-medium text-black">
            <li className="text-mid-blue text-2xl hover:text-dark-blue cursor-pointer">HOME</li>
            <li className="hover:text-dark-blue text-2xl cursor-pointer">ABOUT</li>
            <li className="hover:text-dark-blue text-2xl cursor-pointer">PROJECTS</li>
            <li className="hover:text-dark-blue text-2xl cursor-pointer">RESOURCES ▾</li>
            <li className="hover:text-dark-blue text-2xl cursor-pointer">CONTACT</li>
          </ul>
          <button className="bg-mid-blue text-white text-2xl px-11 py-9 rounded-none hover:bg-dark-blue hover:text-white after:content-['→'] after:ml-1 ml-4">
            Join DIC
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen relative py-20"
        style={{
          backgroundImage: "url('https://map.sahapedia.org/admin/assets/images/202205231822183Copy_of_IMG_1599_Edited_1_.jpg?__imr__=bannerArticle')",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "overlay",
        }}>
        <div className="absolute top-1/2 left-20 transform -translate-y-1/2 flex flex-col space-y-2 container mx-auto px-4 py-20 text-left leading-loose">
          <h6 className="text-light-blue text-3xl font-bold">🚀 INNOVATION BEGINS HERE</h6>
          <h1 className="text-4xl md:text-9xl font-bold text-white leading-loose mb-4">Empowering Innovation at UIET</h1>
          <p className="text-lg md:text-3xl text-gray-200 leading-loose mb-6">"DIC UIET promotes interdisciplinary innovation, prototyping, and problem-solving<br></br> through workshops, collaborative projects, and state-of-the-art labs. Join us in<br></br> transforming ideas into real-world impact."</p>
          <div className="space-x-4">
            <button className="bg-mid-blue text-white text-2xl px-9 py-5 rounded hover:bg-dark-blue">Learn More</button>
            <button className="bg-white text-mid-blue text-2xl px-9 py-5 rounded hover:bg-gray-200">Join Now</button>
          </div>
        </div>
        <div className="absolute top-1/2 right-20 transform -translate-y-1/2 flex flex-col space-y-2">
          <button className="bg-white/20 text-white text-4xl p-7 rounded hover:bg-white/30"></button>
          <button className="bg-white/20 text-white text-4xl p-7 rounded hover:bg-white/30"></button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 px-4 relative ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-mid-blue rounded-full flex items-center justify-center">
              🎓
            </div>
            <h3 className="text-3xl font-semibold mb-2">Idea Incubation</h3>
            <p className="text-gray-600 text-2xl">"Transform your innovative ideas into prototypes with expert mentoring and technical support."</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-mid-blue rounded-full flex items-center justify-center">
              🌐
            </div>
            <h3 className="text-3xl font-semibold mb-2">Skill Development</h3>
            <p className="text-gray-600 text-2xl">"Attend hands-on workshops and bootcamps to upskill in prototyping, design thinking, and more."</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-mid-blue rounded-full flex items-center justify-center">
              🏠
            </div>
            <h3 className="text-3xl font-semibold mb-2">Sustainable Innovation</h3>
            <p className="text-gray-600 text-2xl">"Promote eco-friendly & socially responsible that drive sustainable, long-term impact."</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-mid-blue rounded-full flex items-center justify-center">
              📖
            </div>
            <h3 className="text-3xl font-semibold mb-2">Interdisciplinary</h3>
            <p className="text-gray-600 text-2xl">"Collaborate across domains — engineering, design, and business — to create impactful solutions."</p>
          </div>
        </div>


        <div className="bg-blue-50 p-6 rounded-lg md:flex md:items-center mt-8">
          <div className="md:w-1/2 p-50">
            <img src="https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWI3ZGE5NGYwLTIxOTMtMTFmMC04NDBiLTBkMWUyZGMyZWRkYi5qcGc=" className="w-auto h-auto rounded-lg object-cover image-right" />
          </div>
          <div className="md:w-1/2 md:pl-6 text-left">
            <h6 className="text-5xl font-bold text-dark-blue mb-4">ABOUT US</h6>
            <h2 className="text-7xl font-bold mb-4">Welcome to DIC UIET</h2>
            <p className="text-gray-800 mb-4 text-3xl">DIC at UIET, Panjab University, is a hub for students and researchers to ideate, design, and innovate. We aim to foster a culture of problem-solving and entrepreneurship through real-world projects and industrial collaborations.</p>
            <p className="text-gray-800 mb-4 text-3xl">Explore diverse destinations, discover unique experiences, and let us help you create memories that last a lifetime!</p>
            <ul className="text-dark-blue text-3xl list-disc list-inside mb-4">
              <li>Design Thinking & Prototyping</li>
              <li>Real-world Problem Solving</li>
              <li>Interdisciplinary Collaboration</li>
              <li>Student-driven Innovation</li>
            </ul>
            <button className="bg-teal-500 text-white text-3xl px-4 py-2 rounded hover:bg-teal-600">Learn More</button>
          </div>
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
              <li className="before:content-['>'] before:mr-2 before:text-white">Terms & Condition</li>
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
              <button className="bg-mid-blue px-4 py-2 rounded-r text-white hover:bg-teal-600">
                SignUp
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-6 text-gray-400">
          © Your Site Name, All Right Reserved. Designed by HTML Codex | Distributed by ThemeWagon
        </div>
        <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
          <div></div>
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