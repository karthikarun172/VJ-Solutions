import React, { Component } from "react";
import Home from "./home";
import HomeSection1 from "./homeSection1";
import HomeSection2 from "./homeSection2";
import Footer from "../../common/Footer";

const HomeMain = () => {
  return (
    <div>
      <Home />
      <HomeSection1 />
      <HomeSection2 />
      <Footer />
    </div>
  );
};

export default HomeMain;
