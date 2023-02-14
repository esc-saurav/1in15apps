import React from "react";
import Hero from "../stripe/Hero";
import Navbar from "../stripe/Navbar";
import Sidebar from "../stripe/Sidebar";
import Submenu from "../stripe/Submenu";

const Stripe = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sidebar />
      {/* <Submenu /> */}
    </div>
  );
};

export default Stripe;
