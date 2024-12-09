import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
  const games = [
    { title: 'Game 1', description: 'Description of Game 1', path: '/game1' },
    { title: 'Game 2', description: 'Description of Game 2', path: '/game2' },
    { title: 'Game 3', description: 'Description of Game 3', path: '/game3' },
    { title: 'Game 4', description: 'Description of Game 4', path: '/game4' },
    // Add more games here
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Games Page</h1>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <Link
            key={index}
            to={game.path} // Link to the specific game page
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
          >
            <h2 className="text-xl font-semibold">{game.title}</h2>
            <p className="mt-2 text-gray-400">{game.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Games;
