import React, { Component } from "react";
import DataHome from "./dataHome";
import DataSection1 from "./dataSection1";
import DataService2 from "./dataService2";
import Footer from "../../common/Footer";

const DataService = () => {
  return (
    <div>
      <DataHome />
      <DataSection1 />
      <DataService2 />
      <Footer />
    </div>
  );
};

export default DataService;
