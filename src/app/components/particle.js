'use client';
import { useEffect } from 'react';

// https://vincentgarreau.com/particles.js/ MODIFIER PLUS TARD LE SETUP
export default function ParticlesBackground() {
  useEffect(() => {
    const loadParticlesScript = () => {
      return new Promise((resolve, reject) => {
        const existingScript = document.getElementById('particles-js-script');
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.id = 'particles-js-script';
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);

        // Particle js pas supporté sur Next 
      });
    };

    loadParticlesScript() // Utilise dans use effect ou onload
      .then(() => {
        if (window.particlesJS) {
          window.particlesJS('particles-js', {
            particles: {
              number: { value: 300, density: { enable: true, value_area: 800 } },
              color: { value: '#ffffff' },
              shape: { type: 'circle' },
              opacity: {
                value: 1,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
              },
              line_linked: { enable: false },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'repulse' },
                resize: true,
              },
              modes: {
                grab: { distance: 60, line_linked: { opacity: 0.9 } },
                repulse: { distance: 100, duration: 10 },
              },
            },
            retina_detect: true,
          });
        } else {
          console.error('particlesJS not available on window');
        }
      })
      .catch((error) => {
        console.error('Failed to load particles.js', error);
      });
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',

        zIndex: 2, // 2 pour le background et 3 pour le contenu
        pointerEvents: 'auto', 
      }}
    />
  );
}
