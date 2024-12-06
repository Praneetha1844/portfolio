import React from 'react';
import Projects from './Projects';
import AboutMe from './AboutMe';
import { Link } from 'react-scroll';

function LandingPage() {
  return (
    <div className="relative">
      {/* Video Background */}
      <div className="w-full h-screen relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/bgvideo1.mp4" // Update the path to your video file
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center p-6 rounded-md">
          {/* Navigation Bar */}
          <nav className="absolute top-0 w-full h-[50px] bg-transparent flex items-center px-6 z-20">
            <div className="absolute top-[25px] left-1/2 transform -translate-x-1/2 flex space-x-10 text-base font-semibold text-white font-['Inter']">
              <Link to="home" smooth={true} className="hover:text-gray-300 cursor-pointer">
                Home
              </Link>
              <Link to="projects" smooth={true} className="hover:text-gray-300 cursor-pointer">
                Projects
              </Link>
              <Link to="about-me" smooth={true} className="hover:text-gray-300 cursor-pointer">
                About Me
              </Link>
              <Link to="contact" smooth={true} className="hover:text-gray-300 cursor-pointer">
                Contact
              </Link>
              <Link to="games" smooth={true} className="hover:text-gray-300 cursor-pointer">
                Games
              </Link>
              <Link to="blog" smooth={true} className="hover:text-gray-300 cursor-pointer">
                Blog
              </Link>
            </div>
            <div className="ml-auto">
              <button className="absolute top-[20px] right-[100px] h-[40px] px-4 py-2 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-black">
                Log In
              </button>
            </div>
          </nav>

          {/* Gritex Text in Top Left Corner */}
          <div className="absolute top-[20px] left-[20px] text-white text-[50px] font-['Yesteryear'] leading-[86px] z-20">
            Gritex
          </div>

          {/* Main Content */}
          <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-md max-w-[600px]">
            <h1 className="text-[#f1f1f1] text-[60px] font-['Amatic SC'] leading-[70px]">
              Oh, you’re here? Let’s make it worth your time.
            </h1>
            <p className="text-[#f1f1f1] text-[21px] font-['Inter'] leading-[34px] mt-4">
              Welcome to My Space! Where grit meets innovation, and every challenge is an opportunity. Dive in and explore my journey.
            </p>
            <Link to="projects" smooth={true} duration={500}>
              <button className="mt-6 bg-[#17192f] text-white px-6 py-4 rounded-lg shadow-inner text-lg font-semibold hover:bg-[#2d3155]">
                Explore My Work
              </button>
            </Link>
          </div>
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
      <footer className="text-center py-4 text-sm text-white bg-[#000000]">
        © 2024 Praneetha Potharaju. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
