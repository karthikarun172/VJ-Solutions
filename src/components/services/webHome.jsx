import React, { Component } from "react";
import web_vector1 from "../../css_files/images/web_vector1.svg";
import { Link } from "react-scroll";

const WebHome = () => {
  return (
    <div className="web_home">
      <img src={web_vector1} alt="" className="web_vector" />
      <div className="web_title">
        <h2>Web Design,Development and Maintenance</h2>
        <Link to="webSection1" smooth={true} duration={1000}>
          {" "}
          <button className="web_btn">Check out</button>
        </Link>
      </div>
    </div>
  );
};

export default WebHome;
