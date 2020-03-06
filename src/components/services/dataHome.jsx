import React, { Component } from "react";
import data_vector from "../../css_files/images/data_vector.svg";
import { Link } from "react-scroll";

const DataHome = () => {
  return (
    <div className="dataHome">
      <img src={data_vector} alt="" className="data_vector" />
      <div className="data_box">
        <h2>Data Entry Services</h2>
        <Link to="dataSection1" smooth={true} duration={1000}>
          <button className="data_btn">Check out</button>
        </Link>
      </div>
    </div>
  );
};

export default DataHome;
