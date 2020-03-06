import React, { Component } from "react";
import EpubHome from "./Epub_home";
import EpubSection from "./epubSection";
import EpubSection2 from "./EpubSection2";
import Footer from "../../common/Footer";
import Navbar from "../../common/navBar";

const EpubServices = () => {
  return (
    <div>
      <Navbar />
      <EpubHome />
      <EpubSection />
      <EpubSection2 />
      <Footer />
    </div>
  );
};

export default EpubServices;
