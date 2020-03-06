import React, { Component } from "react";
import man1 from "../../css_files/images/man1.jpg";
import women1 from "../../css_files/images/women1.jpg";
import man2 from "../../css_files/images/man2.jpg";

const HomeSection2 = () => {
  return (
    <div className="home_Section2">
      <div className="client_says">
        <h3>What Our Clients Says</h3>
      </div>
      <div className="our_client_box">
        <div className="our_clients_flex">
          <div className="clients">
            <img src={man1} alt="" className="man1" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              mollitia neque dolore quisquam, sit culpa velit illo magni itaque
              voluptatibus quibusdam! Totam expedita aut consequuntur a omnis
              cum quis? At. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Obcaecati eaque quaerat incidunt quia rem, nesciunt deleniti
              natus excepturi libero! Odit quam esse accusamus harum eveniet
              pariatur similique suscipit nulla accusantium.
            </p>
            <h4>Gilbert Johnson</h4>
          </div>
          <div className="clients">
            <img src={women1} alt="" className="man1" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              mollitia neque dolore quisquam, sit culpa velit illo magni itaque
              voluptatibus quibusdam! Totam expedita aut consequuntur a omnis
              cum quis? At. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Asperiores nam provident repellat praesentium commodi.
              Maxime veniam velit, doloribus autem consequatur reprehenderit
              eligendi reiciendis dolorum culpa necessitatibus laudantium minus
              blanditiis nihil.
            </p>
            <h4>Mia George</h4>
          </div>
          <div className="clients">
            <img src={man2} alt="" className="man1" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              mollitia neque dolore quisquam, sit culpa velit illo magni itaque
              voluptatibus quibusdam! Totam expedita aut consequuntur a omnis
              cum quis? At. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quam illum, ad iste enim sint cumque! Explicabo dicta
              adipisci alias commodi at. Reprehenderit odio veritatis aliquid
              quis similique rerum quam totam!
            </p>
            <h4>Hamiton sundar</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
