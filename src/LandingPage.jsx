import React from 'react';
import Projects from './Projects';
import AboutMe from './AboutMe';
import { Link } from 'react-scroll';

function LandingPage() {
  return (
    <div className="relative">
      {/* Navigation Bar - Matching the Background with Landing Page */}
      <nav className="w-full h-[50px] bg-[#a70943] via-[#ce145e] to-[#dfbfd4]">
        <div className="w-full h-full flex items-center px-6">
          {/* Navbar Links - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-base font-semibold text-zinc-900 font-['Inter']">
            {/* Links updated to use react-scroll's Link component */}
            <Link to="home" smooth={true} className="hover:text-gray-700 cursor-pointer">Home</Link>
            <Link to="projects" smooth={true} className="hover:text-gray-700 cursor-pointer">Projects</Link>
            <Link to="about-me" smooth={true} className="hover:text-gray-700 cursor-pointer">About Me</Link>
            <Link to="contact" smooth={true} className="hover:text-gray-700 cursor-pointer">Contact</Link>
            <Link to="games" smooth={true} className="hover:text-gray-700 cursor-pointer">Games</Link>
            <Link to="blog" smooth={true} className="hover:text-gray-700 cursor-pointer">Blog</Link>
          </div>

          {/* Login Button - Aligned to Top-Right */}
          <div className="ml-auto">
            <button className="h-[40px] px-4 py-2 rounded-lg border-2 border-slate-900 flex items-center justify-center text-base font-semibold hover:bg-slate-900 hover:text-white">
              Log In
            </button>
          </div>
        </div>
      </nav>

      {/* Gritex Text in Top Left Corner */}
      <div className="absolute top-[0px] left-[20px] text-slate-900 text-[50px] font-['Yesteryear'] leading-[86px] z-10">
        Gritex
      </div>

      {/* Main Content */}
      <div className="w-full h-screen bg-gradient-to-b from-[#a70943] via-[#ce145e] to-[#dfbfd4] flex justify-center items-center">
        <div className="w-[650px] text-center">
          <h1 className="text-slate-900 text-[80px] font-['Amatic SC'] leading-[86px]">
            Oh, you’re here? Let’s make it worth your time.
          </h1>
          <p className="text-[#212839] text-[21px] font-['Inter'] leading-[34px] mt-4">
            Welcome to My Space! Where grit meets innovation, and every challenge is an opportunity. Dive in and explore my journey.
          </p>
         {/* Button to scroll to Projects */}
          <Link
            to="projects"  // The target id of the section to scroll to
            smooth={true}   // Enables smooth scrolling
            duration={500}  // Duration for the scroll effect (in ms)
          >
            <button className="mt-6 bg-[#17192f] text-white px-6 py-4 rounded-lg shadow-inner text-lg font-semibold hover:bg-[#2d3155]">
              Explore My Work
            </button>
          </Link>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-30">
        <Projects />
      </div>

      {/* About Me Section */}
<div id="about-me" className="px-0">
  <AboutMe />
</div>

{/* Footer */}
<footer className="text-center py-4 text-sm text-white bg-[#a879eb]">
  © 2024 Praneetha Potharaju. All rights reserved.
</footer>

    </div>
  );
}

export default LandingPage;
