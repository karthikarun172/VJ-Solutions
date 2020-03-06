import React, { Component } from "react";
import epub from "../../css_files/images/epub.svg";
import code from "../../css_files/images/code.svg";
import collect from "../../css_files/images/collect.svg";
import { Link } from "react-router-dom";

const HomeSection1 = () => {
  return (
    <div className="home_section1" id="home_section1">
      <div className="section1_title">
        <h1>Our Services</h1>
      </div>
      <div className="sect">
        <div className="servies_flex">
          <a href="/service/epub">
            <div className="service_cnt">
              <img src={epub} alt="" className="epub" />
              <h3>E-publishing Services</h3>
            </div>
          </a>
          <a href="/service/web">
            <div className="service_cnt">
              <img src={code} alt="" className="web" />
              <h3>Web Design,Development and Maintainence</h3>
            </div>
          </a>
          <a href="/service/data_entry">
            <div className="service_cnt">
              <img src={collect} alt="" className="data_entry" />
              <h3>Data Entry Services</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;
