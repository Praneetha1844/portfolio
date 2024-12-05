import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your main CSS file with Tailwind styles
import App from './App'; // Import the main App component

// Render the App component to the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure this matches the element in your index.html
);
