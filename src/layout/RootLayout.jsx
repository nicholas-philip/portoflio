import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
// import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import MyWork from "../pages/MyWork";

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
    </div>
  );
};

export default RootLayout;
