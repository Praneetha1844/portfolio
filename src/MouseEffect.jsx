// MouseEffect.js
import React, { useEffect, useRef } from 'react';

function MouseEffect() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseEnter = () => {
      cursor.classList.add('hovered');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hovered');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
}

export default MouseEffect;
