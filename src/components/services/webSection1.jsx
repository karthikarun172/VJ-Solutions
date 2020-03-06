import React, { Component } from "react";
import web_vector2 from "../../css_files/images/web_vector_new.svg";
const WebSection1 = () => {
  return (
    <div className="web_section1" id="webSection1">
      <div className="web_cnt">
        <h2>Web Design and Development Services</h2>
        <p>
          Roughly all high-quality websites have common features or web design
          elements like logos and layout, multimedia animations and graphics,
          and easy navigation. To give your website a credibility, your site
          needs to have a unique style and well-organized design structure. At
          VJ Solutions, we are adept at providing premium website design
          services with unique layout, dynamic multimedia animation, CMS and
          user-friendly interface. We have the creative talent to appeal to your
          sense of style, the awareness of current web standards and practices,
          and the ability to turn your ideas into reality. Our designers and
          developers are committed to provide cutting edge corporate website
          design solutions at economical prices. We have designed and maintained
          numerous websites for unlike industries comprising top corporate,
          small businesses and start-up businesses. At VJ Solutions, We create
          attractive and visitor-friendly websites with high-quality graphics
          that load quickly. We offer an extensive range of website design
          outsourcing services, including:
        </p>
        <ul className="web_lists">
          <li className="web_list">
            <h4>Static Website Design Services</h4>
          </li>
          <li className="web_list">
            <h4>Responsive Website Design Services</h4>
          </li>
          <li className="web_list">
            <h4>Dynamic Website Design Services</h4>
          </li>
          <li className="web_list">
            <h4>Flash Website Design Services</h4>
          </li>
        </ul>
      </div>
      <div className="img_sec">
        <img src={web_vector2} alt="" className="web_vector_2" />
      </div>
    </div>
  );
};

export default WebSection1;
