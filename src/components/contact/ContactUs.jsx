import React, { Component } from "react";

const Contact = () => {
  return (
    <div className="contacts">
      <h2>Contact Us</h2>
      <div className="contact_box">
        <form action="" className="contact_form">
          <input type="text" placeholder="Name" className="name_box" />
          <br />

          <input type="text" placeholder="E-mail" className="email_box" />
          <br />
          <input type="text" placeholder="Phone" className="email_box" />
          <br />
          <input
            type="text"
            placeholder="Organisation (optional)"
            className="email_box"
          />

          <br />
          <input type="text" placeholder="Query" className="Query" />
        </form>

        <button className="contact_btn">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
