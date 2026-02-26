import React, { useState, useEffect } from 'react';
import './styles.css';

const ScrollProgressIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const totalDocScrollLength = docHeight - windowHeight;
      const progress = Math.max(0, Math.min(100, (scrollTop / totalDocScrollLength) * 100));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);

    // Initialize progress on mount
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressIndicator;