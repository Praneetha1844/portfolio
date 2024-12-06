import React from 'react';

function AboutMe() {
  return (
    <div
      className="min-h-screen text-black flex flex-col justify-center items-center px-6"
      style={{
        backgroundImage: "url('Aboutbg.jpg')", // Replace 'your-image.jpg' with the actual image file name
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-4xl font-bold mb-6 text-white">About Me</h1>
      <p className="text-lg leading-relaxed max-w-3xl text-center text-white">
        Hi! I'm Praneetha Potharaju, a passionate developer of code, logic, and just the right amount of magic.
      </p>
      <p className="text-lg leading-relaxed mt-4 max-w-3xl text-center text-white">
        Breaking code? Never. Breaking stereotypes? Always. I take messy problems, sprinkle a little logic (and coffee), and voilà – solutions so smooth they could double as butter.
      </p>
      <p className="text-lg leading-relaxed mt-4 max-w-3xl text-center text-white">
        Outside of coding, I enjoy exploring creative pursuits like blogging, organizing events, and inspiring others to reach their potential. If you’re ready to turn "What ifs" into "Wow, that’s genius," let’s connect!
      </p>

      {/* Social Media Buttons */}
      <div className="mt-6 flex space-x-4">
        <a
          href="https://linkedin.com/in/praneetha-potharaju"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/c/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black"
        >
          YouTube
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
