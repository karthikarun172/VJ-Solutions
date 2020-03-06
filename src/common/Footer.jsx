import React, { Component } from "react";
import fb from "../../src/css_files/images/fb.svg";
import insta from "../../src/css_files/images/insta.svg";
import In from "../../src/css_files/images/in.svg";
import twitter from "../../src/css_files/images/tw.svg";
import phone from "../../src/css_files/images/phoneIcon.svg";
import location from "../../src/css_files/images/location.svg";
import mail from "../../src/css_files/images/mail.svg";
import skype from "../../src/css_files/images/skype.svg";
import line from "../../src/css_files/images/line2.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contactus">
        <h3>Contact Us On </h3>
        <div className="contact_flex">
          <div className="contact_2">
            <img src={location} alt="" className="contact_imgs" />
            <h4>TIRUPATTUR-635 851 TAMILNADU </h4>
          </div>
          <div className="contact_1">
            <img src={phone} alt="" className="contact_imgs" />

            <h4> - 9626622350 / 7639297818</h4>
          </div>
          <div className="contact_3">
            <img src={mail} alt="" className="contact_imgs" />
            <h4>vjsolutions2019@gmail.com</h4>
          </div>
          <div className="contact_4">
            <img src={skype} alt="" className="contact_imgs" />
            <h4>vjsols_online</h4>
          </div>
        </div>
      </div>
      <div className="sectionline">
        <img src={line} className="line" alt="" />
      </div>
      <div className="navigation">
        <h3>Navigation</h3>
        <div className="nav_flex">
          <a href="/">
            <h5>HOME</h5>
          </a>
          <a href="/about">
            <h5>ABOUT US</h5>
          </a>
          <a href="/contactUs">
            <h5>CONTACT</h5>
          </a>
          <h5>SERVICES</h5>
        </div>
      </div>
      <div className="icons">
        <h4>Follow us on</h4>
        <a
          href="https://www.facebook.com/checkpoint/?next=https%3A%2F%2Fwww.facebook.com%2F 
"
        >
          <img src={fb} alt="" className="d" />
        </a>
        <a
          href="https://twitter.com/home 
"
        >
          <img src={twitter} alt="" className="d" />
        </a>
        <a href="https://www.linkedin.com/in/vj-solutions-5056231a0/detail/recent-activity/  ">
          <img src={In} alt="" className="d" />
        </a>
        <a
          href="https://www.instagram.com/ 
"
        >
          <img src={insta} alt="" className="d" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
