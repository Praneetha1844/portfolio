import React, { useRef, useEffect } from 'react';
import { WebGLRenderer } from 'three'; // Assuming you're using three.js

const WebGLCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const renderer = new WebGLRenderer({ canvas: canvasRef.current });
      renderer.setSize(window.innerWidth, window.innerHeight);
      // Continue with WebGL setup
    }
  }, []); // Empty dependency array means it runs once after initial render

  return <canvas ref={canvasRef}></canvas>;
};
