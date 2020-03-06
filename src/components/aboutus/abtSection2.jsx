import React, { Component } from "react";
import vicky from "../../css_files/images/vicky.svg";
import patern from "../../css_files/images/patner.svg";
import ak from "../../css_files/images/ak.svg";
import Footer from "../../common/Footer";

const AboutSection2 = () => {
  return (
    <div className="teamSection">
      <div className="our_team_cnt">
        <h2>Our Team</h2>
        <div className="team_flex">
          <div className="vicky_ceo">
            <img src={vicky} alt="" className="img" />
            <h3>Vicky</h3>
            <p>Founder</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a,
              veritatis pariatur praesentium ea sequi tempore earum modi
              accusamus ipsam maiores repellat. Laborum minima commodi impedit,
              facilis adipisci doloremque facere! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Assumenda, facere, alias voluptas
              illo ipsa aperiam, mollitia culpa repellendus autem odio soluta at
              deserunt eius sit. Nulla veritatis beatae illum debitis!
            </p>
          </div>
          <div className="other_guy">
            <img src={patern} alt="" className="img" />
            <h3>Jawahar</h3>
            <p>CO-Founder & CEO</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque voluptatem provident earum rerum aliquid ipsa, voluptas
              harum aut quisquam blanditiis commodi deserunt, saepe quidem
              aspernatur alias nesciunt ipsum nostrum totam? Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Perspiciatis praesentium
              dolore officia maiores, est aliquid eaque, dignissimos laboriosam
              veritatis exercitationem enim eius neque. Eum illum cumque in
              dolores veritatis soluta.
            </p>
          </div>
          <div className="developer1">
            <img src={ak} alt="" className="img" />
            <h3>Arun karthik</h3>
            <p>CTO</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum alias adipisci reprehenderit ullam magnam fugit cumque,
              architecto dignissimos eum quisquam magni corrupti eligendi
              recusandae reiciendis laborum temporibus esse? Repellat,
              assumenda? Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Consequuntur quibusdam blanditiis ab nobis molestias
              voluptates modi esse deleniti repellat cumque ut dolorem, minima
              eius, deserunt velit autem. Recusandae, voluptatibus voluptatum!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutSection2;
