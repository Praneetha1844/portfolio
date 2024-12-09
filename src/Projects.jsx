import React, { useEffect, useRef } from 'react';

const projectsData = [
  {
    title: 'WasteWhizIBM',
    description: 'WasteWhizIBM is a data science project that uses machine learning and data analysis to improve marketing efficiency by optimizing customer targeting and decision-making.',
    githubLink: 'https://github.com/smartinternz02/SBSPS-Challenge-10787-wastewhiz-Data-Science-enabled-Marketing-Efficiency-Enhancement',
  },
  {
    title: 'Flappy Bird Game',
    description: 'The Flappy Bird game in Python, built with Pygame, replicates the classic arcade game where players control a bird to avoid obstacles.',
    githubLink: 'https://github.com/Praneetha1844/flappy',
  },
  {
    title: 'Handwritten Character Detection',
    description: 'Handwritten character detection using neural networks involves training deep learning models like Convolutional Neural Networks (CNNs) to classify and recognize handwritten characters.',
    githubLink: 'https://github.com/Praneetha1844/CodeAlpha_HandwrittenCharacter_Detection',
  },
  {
    title: 'Calculator',
    description: 'A Java-based calculator project provides a user-friendly interface to perform basic arithmetic operations.',
    githubLink: 'https://github.com/Praneetha1844/Calci',
  },
];

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); // Apply animation class
        } else {
          entry.target.classList.remove('animate'); // Remove animation class
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    // Observe each card in the projects list
    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card); // Cleanup observer on component unmount
        }
      });
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black py-10 px-4">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">My Projects</h1>
      <div className="container mx-auto flex flex-wrap justify-center gap-20">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white p-6 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px] rounded-xl shadow-xl hover:shadow-2xl project-card"
            ref={(el) => cardsRef.current[index] = el} // Store reference to each card
          >
            <div className="flex flex-col justify-between h-[250px]">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 description">
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
