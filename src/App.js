import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Games from './Games';
import Blog from './Blog';
import MouseEffect from './MouseEffect';
import Game1 from './Game1';

function App() {
  return (
    <Router>
      <MouseEffect />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<Games />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Game1" element={<Game1 />} /> 

      </Routes>
    </Router>
  );
}

export default App;
