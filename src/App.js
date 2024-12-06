import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Games from './Games';
import Blog from './Blog';
import MouseEffect from './MouseEffect';

function App() {
  return (
    
    <Router>
      <MouseEffect />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<Games />} />
        <Route path="/blog" element={<Blog />} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
