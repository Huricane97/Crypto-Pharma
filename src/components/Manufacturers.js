import React, { Component, useState,useEffect } from 'react'
import Navbar from '../navbar'
import Footer from './Footer'
import OrderTabs from './OrderTabsPharmacies'
import OrderTabsManufacturer from './OrderTabsManufacturer'
import { Navigate } from "react-router-dom";

export default function Manufacturers() {
  const [authenticated, setauthenticated] = useState(true);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated") === "true";
    setauthenticated(loggedInUser);
  }, []);

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  } else {
    return (
      <div>
        <Navbar/>
        <OrderTabsManufacturer/>
        <Footer/>
      </div>
    )
    }
}
