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
    description: 'Handwritten character detection using neural networks involves training deep learning models like Convolutional Neural Networks (CNNs) to classify and recognize handwritten characters.',
    githubLink: 'https://github.com/Praneetha1844/CodeAlpha_HandwrittenCharacter_Detection',
  },
  {
    title: 'Project Four',
    description: 'A Java-based calculator project provides a user-friendly interface to perform basic arithmetic operations.',
    githubLink: 'https://github.com/Praneetha1844/Calci',
  },
];

function Projects() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-800 to-gray-900 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-white mb-10">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full max-w-sm bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-1 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="bg-white rounded-md p-4 flex flex-col justify-between h-72">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-500 transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 overflow-hidden text-ellipsis">
                {project.description}
              </p>
              <div className="text-right">
                <span className="text-indigo-500 text-sm font-medium group-hover:text-blue-600 transition-colors">
                  View on GitHub →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
