import React, { Component } from "react";
import WebHome from "./webHome";
import WebSection1 from "./webSection1";
import WebSection2 from "./webSection2";
import Footer from "../../common/Footer";

const WebServices = () => {
  return (
    <div>
      <WebHome />
      <WebSection1 />
      <WebSection2 />
      <Footer />
    </div>
  );
};

export default WebServices;
