import Navbar from "./navbar.js";
import placeholder from "./images/about2.png";
import bandana from "./images/bandana.png";
import eth from "./images/eth.png";
import spray from "./images/spray.png";
import discord from "./images/Discord.webp";
import fb from "./images/FB.webp";
import instagram from "./images/Instgram.webp";
import twitter from "./images/twitter.webp";
import sagi from "./images/sagi.png";
import moar from "./images/moar.png";
import React from "react";
import Particles from './components/particle.jsx';
import Hero from "./components/hero.js";
import "./App.css";
import "animate.css";
import HomeN from "./components/HomeN.js";
import Footer from "./components/Footer.js";


function Home() {
  return (
    <div className="container-fluid">
      <Hero/>
      <HomeN/>
      <Footer/>
       
    </div>
  );
}

export default Home;
