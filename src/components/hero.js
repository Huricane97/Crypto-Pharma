import Particles from './particle.jsx';
import React from 'react';
import Navbar from "../navbar.js";

function Hero() {
    return (
        <div>
            <Particles/>
        <div className="hero">         
          <Navbar/>
        <div className="container">
          <h1 className="margindist text-warning font-weight-bold  text-center pb-5 mb-2">
            WELCOME TO THE CRYPTO PHARMA
          </h1>
          <p className="text-white text-lg text-center  ext-center">
          Secure your supply chain and protect patient safety with a revolutionary decentralized solution - ensuring authenticity and trust in every step of the process
          </p>
        </div>
      </div>
      </div>
    );
}
export default Hero