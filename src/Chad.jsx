import React, { useEffect, useRef } from 'react';

const Chad = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Animation variables
    const particles = [];
    const particleCount = 100;

    // Particle constructor
    function Particle(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.color = 'rgba(255, 255, 255, 0.8)';
    }

    // Draw function to render particles
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Loop through particles
      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();

        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Remove particles that go off screen
        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
          particles.splice(index, 1);
        }
      });
    }

    // Generate particles on click
    function generateParticles(event) {
      const xPos = event.x;
      const yPos = event.y;

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(xPos, yPos));
      }
    }

    // Event listener for clicks to trigger particle generation
    canvas.addEventListener('click', generateParticles);

    // Animation loop
    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate(); // Start animation

    return () => {
      canvas.removeEventListener('click', generateParticles); // Clean up on component unmount
    };
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Chad Animation</h1>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
    </div>
  );
};

export default Chad;
