import React from 'react';
 // Ensure the CSS file is in the same directory or update the path if needed

const Game1 = () => {
  return (
    <div className="game1-container">
      <h1 className="game-title">Welcome to Game 1</h1>
      <p className="game-description">
        This is a sample description of Game 1. You can add gameplay instructions, features, and more here.
      </p>
      <div className="game-actions">
        <button className="play-button">Play Game</button>
        <button className="back-button">Go Back to Games</button>
      </div>
    </div>
  );
};

export default Game1;