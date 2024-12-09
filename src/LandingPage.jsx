import React, { useState, useEffect } from 'react';
import Projects from './Projects';
import AboutMe from './AboutMe';
import { Link, useNavigate } from 'react-router-dom';

function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const zoomEffect = 1 + scrollY * 0.001;

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="w-full h-screen relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/bgvideo1.mp4"
          autoPlay
          loop
          muted
          style={{
            transform: `scale(${zoomEffect})`,
            transition: 'transform 0.1s ease-out',
          }}
        ></video>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center p-6 rounded-md">
          <nav className="absolute top-0 w-full h-[50px] bg-transparent flex items-center px-6 z-20">
            <div className="absolute top-[25px] left-1/2 transform -translate-x-1/2 flex space-x-10 text-base font-semibold text-white font-['Inter']">
              <Link to="/" className="hover:text-gray-300 cursor-pointer">
                Home
              </Link>
              <button onClick={() => handleNavClick('projects')} className="hover:text-gray-300 cursor-pointer">
                Projects
              </button>
              <button onClick={() => handleNavClick('about-me')} className="hover:text-gray-300 cursor-pointer">
                About Me
              </button>
              <button onClick={() => handleNavClick('contact')} className="hover:text-gray-300 cursor-pointer">
                Contact
              </button>
              <Link to="/games" className="hover:text-gray-300 cursor-pointer">
                Games
              </Link>
              <button onClick={() => handleNavClick('blog')} className="hover:text-gray-300 cursor-pointer">
                Blog
              </button>
            </div>
            <div className="ml-auto">
              <button className="absolute top-[20px] right-[100px] h-[40px] px-4 py-2 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-black">
                Log In
              </button>
            </div>
          </nav>

          <div className="absolute top-[20px] left-[20px] text-white text-[50px] font-['Yesteryear'] leading-[86px] z-20">
            Gritex
          </div>

          <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-md max-w-[600px]">
            <h1 className="text-[#f1f1f1] text-[60px] font-['Amatic SC'] leading-[70px]">
              Oh, you’re here? Let’s make it worth your time.
            </h1>
            <p className="text-[#f1f1f1] text-[21px] font-['Inter'] leading-[34px] mt-4">
              Welcome to My Space! Where grit meets innovation, and every challenge is an opportunity. Dive in and explore my journey.
            </p>
            <button onClick={() => handleNavClick('projects')} className="mt-6 bg-[#17192f] text-white px-6 py-4 rounded-lg shadow-inner text-lg font-semibold hover:bg-[#2d3155]">
              Explore My Work
            </button>
          </div>
        </div>
      </div>

      <div id="projects" className="py-30">
        <Projects />
      </div>

      <div id="about-me" className="px-0">
        <AboutMe />
      </div>

      <footer className="text-center py-4 text-sm text-white bg-[#000000]">
        © 2024 Praneetha Potharaju. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;