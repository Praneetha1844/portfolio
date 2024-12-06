import React from 'react';

function AboutMe() {
  return (
    <div
      className="min-h-screen text-black flex flex-row  bg-black justify-between items-center px-4"
      style={{
        // Replace 'your-image.jpg' with your actual background image file name
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Left Content */}
      <div className="max-w-lg text-left ml-64">
        {/* Centered Heading */}
        <h1 className="text-4xl font-bold mb-6 text-white text-center">About Me</h1>

        {/* Left-Aligned Paragraphs */}
        <p className="text-lg leading-relaxed text-white">
          Hi! I'm Praneetha Potharaju, a passionate developer of code, logic, and just the right amount of magic.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-white">
          Breaking code? Never. Breaking stereotypes? Always. I take messy problems, sprinkle a little logic (and coffee), and voilà – solutions so smooth they could double as butter.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-white">
          Outside of coding, I enjoy exploring creative pursuits like blogging, organizing events, and inspiring others to reach their potential. If you’re ready to turn "What ifs" into "Wow, that’s genius," let’s connect!
        </p>

        {/* Social Media Buttons */}
        <div className="mt-10 flex space-x-12 justify-center ">
          <a
            href="https://linkedin.com/in/praneetha-potharaju"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold border border-white hover:bg-white hover:text-black"
            >         
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold border border-white hover:bg-white hover:text-black"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/c/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold border border-white hover:bg-white hover:text-black"
          >
            YouTube
          </a>
        </div>
      </div>

      {/* Right Photo */}
      <div className="w-1/4 flex justify-center items-center mr-40">
        <img
          src="/doi.jpg" // Replace 'your-photo.jpg' with the actual filename of your photo
          alt="Praneetha Potharaju"
          className="rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
}

export default AboutMe;
