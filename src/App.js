import Home from "./Home"
import ComingSoon from "./comingsoon";
import { render } from "react-dom";
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Hero from "./components/hero";
import Particles from "./components/particle";
import Pharmacy from "./components/Pharmacy";
import Manufacturers from "./components/Manufacturers";
import Warehouses from "./components/Warehouses";
import Drivers from "./components/Drivers";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pharmacy" element={<Pharmacy/>} />
      <Route path="/Manufacturers" element={<Manufacturers/>} />
      <Route path="/Warehouses" element={<Warehouses/>} />
      <Route path="/Drivers" element={<Drivers/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
    </Routes>

    
    );
}

export default App;
