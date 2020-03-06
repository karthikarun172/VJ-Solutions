import React, { Component } from "react";

import { Link } from "react-scroll";
import Navbar from "../../common/navBar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="slogan">
        <h1 className="header_slogan">
          <span className="make">Make</span>
          <span>It Happen</span>
        </h1>
      </div>
      <div className="home_btn">
        <Link to="home_section1" smooth={true} duration={1000}>
          <button className="home_btn_1">Go for a tour</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
