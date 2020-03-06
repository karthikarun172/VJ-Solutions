import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import EpubServices from "./components/services/Epubservices";
import DataService from "./components/services/DataService";
import HomeMain from "./components/home/homeMain";
import WebServices from "./components/services/webService";
import AboutUs from "./components/aboutus/abouts";
import Contact from "./components/contact/ContactUs";
import HomeSection1 from "./components/home/homeSection1";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/service/epub" component={EpubServices}></Route>
        <Route path="/service/data_entry" component={DataService}></Route>
        <Route path="/service/web" component={WebServices}></Route>
        <Route path="/service" component={HomeSection1}></Route>
        <Route path="/about" component={AboutUs}></Route>
        <Route path="/contactUs" component={Contact}></Route>
        <Route path="/" exact component={HomeMain}></Route>
      </Switch>
    </div>
  );
}

export default App;
