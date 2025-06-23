import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground({ darkMode }) {
  const [instance, setInstance] = useState(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    setInstance(container);
  }, []);

  useEffect(() => {
    if (instance) {
      instance.loadTheme(darkMode ? "dark" : "light");
    }
  }, [darkMode, instance]);

  const options = {
    fullScreen: { enable: true, zIndex: 0 },
    themes: [
      {
        name: 'light',
        default: { mode: 'light' },
        options: {
          background: { color: '#f0f2f5' },
          particles: { color: { value: '#4e54c8' }, links: { color: '#4e54c8' } }
        }
      },
      {
        name: 'dark',
        default: { mode: 'dark' },
        options: {
          background: { color: '#111' },
          particles: { color: { value: '#ffffff' }, links: { color: '#ffffff' } }
        }
      }
    ],
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } }
    },
    particles: {
      links: { enable: true, distance: 120, opacity: 0.4, width: 1 },
      move: { enable: true, speed: 1.2, outModes: { default: "out" } },
      number: { value: 50, density: { enable: true, area: 800 } },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
}
