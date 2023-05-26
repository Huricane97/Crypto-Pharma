import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import OrderTabs from "./OrderTabsPharmacies";
import Navbar from "../navbar";
import Footer from "./Footer";

function Pharmacy() {
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
        <Navbar />
        <OrderTabs />
        <Footer />
      </div>
    );
  }
}

export default Pharmacy;
