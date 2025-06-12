import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recreate particles on resize
      initParticles();
    };
    
    // Create particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 20), 80);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.7,
          speedY: (Math.random() - 0.5) * 0.7,
          color: theme === 'dark' ? 
            `rgba(0, 98, 255, ${Math.random() * 0.5 + 0.2})` : 
            `rgba(0, 98, 255, ${Math.random() * 0.3 + 0.1})`
        });
      }
    };
    
    // Connect close particles with lines
    const connectParticles = () => {
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.beginPath();
            ctx.strokeStyle = theme === 'dark' ? 
              `rgba(0, 98, 255, ${opacity * 0.2})` : 
              `rgba(0, 98, 255, ${opacity * 0.1})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Handle mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      // Reset flag after 100ms of no movement
      setTimeout(() => {
        isMouseMoving = false;
      }, 100);
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].speedX;
        particles[i].y += particles[i].speedY;
        
        // Boundary check
        if (particles[i].x < 0 || particles[i].x > canvas.width) {
          particles[i].speedX = -particles[i].speedX;
        }
        
        if (particles[i].y < 0 || particles[i].y > canvas.height) {
          particles[i].speedY = -particles[i].speedY;
        }
        
        // Mouse interaction
        if (isMouseMoving) {
          const dx = mouseX - particles[i].x;
          const dy = mouseY - particles[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const directionX = dx / distance || 0;
            const directionY = dy / distance || 0;
            
            particles[i].speedX -= directionX * force * 0.2;
            particles[i].speedY -= directionY * force * 0.2;
          }
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
        ctx.fillStyle = particles[i].color;
        ctx.fill();
      }
      
      // Connect particles
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initialize
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default BackgroundParticles;