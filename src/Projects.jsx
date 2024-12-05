import React from 'react';

const projectsData = [
  {
    title: 'Project One',
    description: 'WasteWhizIBM is a data science project that uses machine learning and data analysis to improve marketing efficiency by optimizing customer targeting and decision-making.',
    githubLink: 'https://github.com/smartinternz02/SBSPS-Challenge-10787-wastewhiz-Data-Science-enabled-Marketing-Efficiency-Enhancement',
  },
  {
    title: 'Project Two',
    description: 'The Flappy Bird game in Python, built with Pygame, replicates the classic arcade game where players control a bird to avoid obstacles.',
    githubLink: 'https://github.com/Praneetha1844/flappy',
  },
  {
    title: 'Project Three',
    description: 'Handwritten character detection using neural networks involves training deep learning models like Convolutional Neural Networks (CNNs) to classify and recognize handwritten characters',
    githubLink: 'https://github.com/Praneetha1844/CodeAlpha_HandwrittenCharacter_Detection',
  },
  {
    title: 'Project Four',
    description: 'A Java-based calculator project provides a user-friendly interface to perform basic arithmetic operations',
    githubLink: 'https://github.com/Praneetha1844/Calci',
  }, 
];

function Projects() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#dfbfd4] to-blue flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mt-10">My Projects</h1>
      <div className="w-full overflow-x-auto flex space-x-6 px-10 mt-10">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.githubLink}  // GitHub link
            target="_blank"            // Opens in new tab
            rel="noopener noreferrer"  // Security for external links
            className="min-w-[300px] h-[400px] bg-white rounded-lg border-2 border-black shadow-xl p-4 flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
