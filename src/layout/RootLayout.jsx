import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
// import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import MyWork from "../pages/MyWork";
import Footer from "../pages/Footer";

const RootLayout = () => {
  return (
    <div>
      <Nav />
      {/* <Outlet /> */}
      <Home />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default RootLayout;
