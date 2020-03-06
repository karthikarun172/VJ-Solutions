import React, { Component } from "react";
import epub_vector from "../../css_files/images/epub_vector.svg";
import { Link } from "react-scroll";

const EpubHome = () => {
  return (
    <div className="epubHome">
      <img src={epub_vector} alt="" className="ebpu_vector" />
      <div className="epub_home_box">
        <h2>E-publication Services</h2>
        <Link to="epubSection1" smooth={true} duration={1000}>
          <button className="epub_btn">Check out</button>
        </Link>
      </div>
    </div>
  );
};

export default EpubHome;
