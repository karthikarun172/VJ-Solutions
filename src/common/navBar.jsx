import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <ul className="nav_lists">
        <li className="nav_list">
          <Link to="/">
            <h5>Home</h5>
          </Link>
        </li>
        <li className="nav_list">
          <Link to="about">
            <h5>About US</h5>
          </Link>
        </li>
        <li className="nav_list">
          <Link to="/service">
            <h5>Services</h5>
          </Link>
        </li>
        <li className="nav_list">
          <Link to="/contactUs">
            <h5>Contact</h5>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
