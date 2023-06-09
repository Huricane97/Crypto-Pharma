import React from 'react';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ParticleConfig from './particle-config';
function particle() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{ "fps_limit": 60, "interactivity": { "detectsOn": "canvas", "events": { "onClick": { "enable": true, "mode": "push" }, "onHover": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "push": { "particles_nb": 4 }, "repulse": { "distance": 200, "duration": 0.4 } } }, "particles": { "color": { "value": "#ffffff" }, "links": { "color": "#ffffff", "distance": 150, "enable": true, "opacity": 0.4, "width": 1 }, "move": { "bounce": false, "direction": "none", "enable": true, "outMode": "out", "random": false, "speed": 1, "straight": false }, "number": { "density": { "enable": true, "area": 800 }, "value": 80 }, "opacity": { "value": 0.5 }, "shape": { "type": "circle" }, "size": { "random": true, "value": 5 } }, "detectRetina": true }}

      ></Particles>
    </div>
  );
}
export default particle;