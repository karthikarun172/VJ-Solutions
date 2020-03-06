import React, { Component } from "react";
import web_vector3 from "../../css_files/images/web_vector3.svg";
const WebSection2 = () => {
  return (
    <div className="web_service_2">
      <div className="web_cnt_2">
        <h2>Web Maintainence Services</h2>
        <p>
          To provide you end-to-end web site maintenance support, we do
          everything from all small changes, additions and other modifications
          to fixing broken links or bugs. Our website maintenance involves the
          following things
        </p>
        <ul className="web_list1">
          <li className="web_lists1">
            <h4>Version upgrade</h4>
          </li>
          <li className="web_lists1">
            <h4>Module installation and support</h4>
          </li>
          <li className="web_lists1">
            <h4>Bug Fixing & Security Audit</h4>
          </li>
          <li className="web_lists1">
            <h4>Fixing Broken Links</h4>
          </li>
          <li className="web_lists1">
            <h4>Code Restructuring and Feature enhancements</h4>
          </li>
          <li className="web_lists1">
            <h4>Update Text Content</h4>
          </li>
          <li className="web_lists1">
            <h4>Add, Edit and Delete Pages, Images, Links</h4>
          </li>
          <li className="web_lists1">
            <h4>Newsletter & Email List Management</h4>
          </li>
          <li className="web_lists1">
            <h4>Update Announcements, Articles, etc.</h4>
          </li>
          <li className="web_lists1">
            <h4>Performance Optimization</h4>
          </li>
          <li className="web_lists1">
            <h4>Website Monthly Backup</h4>
          </li>
        </ul>
      </div>
      <div className="web_img_vector3">
        <img src={web_vector3} alt="" className="web_vector3" />
      </div>
    </div>
  );
};

export default WebSection2;
