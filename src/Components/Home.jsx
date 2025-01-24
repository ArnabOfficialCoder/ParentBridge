import React, { useEffect } from "react";
import Parent from "./Parent.jsx";
import A_icon from "../Assets/Images/A.png";
import B_icon from "../Assets/Images/w.jpg";
import C_icon from "../Assets/Images/r.jpg";
import D_icon from "../Assets/Images/t.jpg";
import E_icon from "../Assets/Images/y.jpg";
import F_icon from "../Assets/Images/m.jpg";
import G_icon from "../Assets/Images/n.jpg";
import H_icon from "../Assets/Images/v.jpg";
import I_icon from "../Assets/Images/b.jpg";
import J_icon from "../Assets/Images/gh.jpeg";
import K_icon from "../Assets/Images/sd.jpeg";
import L_icon from "../Assets/Images/df.jpeg";
import M_icon from "../Assets/Images/fg.jpg";
import N_icon from "../Assets/Images/hj.jpg";
import O_icon from "../Assets/Images/as.jpeg";
import P_icon from "../Assets/Images/jk.jpeg";
import Q_icon from "../Assets/Images/kl.jpeg";
import R_icon from "../Assets/Images/q.jpg";
import S_icon from "../Assets/Images/z.jpg";
import T_icon from "../Assets/Images/fa.png";
import U_icon from "../Assets/Images/i.webp";
import V_icon from "../Assets/Images/t.png";
import W_icon from "../Assets/Images/w.png";
import X_icon from "../Assets/Images/li.png";
import Y_icon from "../Assets/Images/play-store.png";
import Z_icon from "../Assets/Images/app-store.png";
import A1_icon from "../Assets/Images/2.png";
import A2_icon from "../Assets/Images/sunil1.png";
import A3_icon from "../Assets/Images/jaya.png";
import "./Home.css";
import FooterAIMS from "../CommonComponents/Footer.jsx";

const Home = () => {
  const HandleNavigation = (path) => {
    window.location.href = path;
  };
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src={A_icon} width="125px" alt="gg" />
            </div>
            <nav>
              <ul>
                <li className="nav-item" onClick={() => HandleNavigation("/")}>
                  Home
                </li>
                <li
                  className="nav-item"
                  onClick={() => HandleNavigation("/parent")}
                >
                  Parent
                </li>
                <li
                  className="nav-item"
                  onClick={() => HandleNavigation("/teacher")}
                >
                  Teacher
                </li>
                <li
                  className="nav-item"
                  onClick={() => HandleNavigation("/aboutAIMS")}
                >
                  About
                </li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <div className="col-2">
              <h1>
                TOP OPPORTUNITIES!
                <br />
                TOP PLACEMENTS!
              </h1>
              <p>
                {" "}
                "VISIONS - To transform youth into professionals of global{" "}
                <br />
                excellence with a deep concern for society"{" "}
              </p>
              <a href="http://www.theaims.ac.in" className="btn">
                Explore Now &#8594;
              </a>
            </div>
            <div className="col-2">
              <img src={B_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="catagories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={C_icon} alt="" />
            </div>
            <div className="col-3">
              <img src={D_icon} alt="" />
            </div>
            <div className="col-3">
              <img src={E_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="small-container">
        <h2 className="title">News</h2>
        <div className="row">
          <div className="col-4">
            <img src={I_icon} alt="" />
            <h4>Congratulations to the winners!</h4>

            <p>MBA Department</p>
          </div>
          <div className="col-4">
            <img src={F_icon} alt="" />
            <h4>Congratulations to our Founder and Principal</h4>

            <p>Dr. Kiran Reddy</p>
          </div>
          <div className="col-4">
            <img src={G_icon} alt="" />
            <h4>Prestigious certificate of Excellence</h4>

            <p>AIMS(AIMS Institutes)</p>
          </div>
          <div className="col-4">
            <img src={H_icon} alt="" />
            <h4>Carnival Cruise Line Job Fair At AIMS Institutes</h4>
            <p>For Every Department</p>
          </div>
        </div>
        <h2 className="title">Events</h2>
        <div className="row">
          <div className="col-4">
            <img src={J_icon} alt="" />
            <h4>National Management Week 2023</h4>

            <p>AIMS Institues</p>
          </div>
          <div className="col-4">
            <img src={K_icon} alt="" />
            <h4>Grand Engineers' Day Interdepartmental Event</h4>

            <p>CHANDRA GYAN</p>
          </div>
          <div className="col-4">
            <img src={L_icon} alt="" />
            <h4>Cultivating Agility and Effective Communication</h4>

            <p>Buisness Arena</p>
          </div>
          <div className="col-4">
            <img src={M_icon} alt="" />
            <h4>5 - Day FDP cell For IPR And Management (CIPAM)</h4>

            <p>Intellectual Property Rights (IPR)</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src={N_icon} alt="" />
            <h4>Online FDP</h4>

            <p>Research Methodology</p>
          </div>
          <div className="col-4">
            <img src={O_icon} alt="" />
            <h4>Online Workshop</h4>

            <p>Bibliometric Analysis</p>
          </div>
          <div className="col-4">
            <img src={P_icon} alt="" />
            <h4>Vanijya Darpan 2023</h4>

            <p>AIMS Institues</p>
          </div>
          <div className="col-4">
            <img src={Q_icon} alt="" />
            <h4>Parichay 2023</h4>

            <p>AIMS Institues</p>
          </div>
        </div>
      </div>
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src={R_icon} alt="R_Icon" className="offer-img" />
            </div>
            <div className="col-2">
              <p>
                We are happy to explore possible collaborations with
                institutions globally
              </p>
              <h1>INTERNATIONAL RELATIONS</h1>
              <small>
                Contact us to learn more about the course of your interest, we
                will be happy to assist you in choosing the right career for
                you.
              </small>
              <a
                href="https://www.theaims.ac.in/centre-for-international-liaison"
                className="btn"
              >
                Explore Course &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                {" "}
                Having a single minded focus on addressing student needs, we are
                clear that it is our responsibility to help our students realize
                their goals in an increasingly competitive world. We have
                consistently produced excellent results and AIMS alumni can be
                found at premier organizations in India and overseas. From
                academic excellence to leadership qualities, a nurturing
                environment with required infrastructure, AIMS offers everything
                needed to succeed as a student.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src={S_icon} alt="" />
              <h3>Dr. Meka Kerron G Reddy</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Having a single minded focus on addressing student needs, we are
                clear that it is our responsibility to help our students realize
                their goals in an increasingly competitive world. We have
                consistently produced excellent results and AIMS alumni can be
                found at premier organizations in India and overseas. From
                academic excellence to leadership qualities, a nurturing
                environment with required infrastructure, AIMS offers everything
                needed to succeed as a student.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src={A3_icon} alt="" />
              <h3>Dr. Jayashree Nair</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Having a single minded focus on addressing student needs, we are
                clear that it is our responsibility to help our students realize
                their goals in an increasingly competitive world. We have
                consistently produced excellent results and AIMS alumni can be
                found at premier organizations in India and overseas. From
                academic excellence to leadership qualities, a nurturing
                environment with required infrastructure, AIMS offers everything
                needed to succeed as a student.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src={A2_icon} alt="" />
              <h3>Mr. Sunil Kumar S</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src={T_icon} alt="" />
            </div>
            <div className="col-5">
              <img src={U_icon} alt="" />
            </div>
            <div className="col-5">
              <img src={V_icon} alt="" />
            </div>
            <div className="col-5">
              <img src={W_icon} alt="" />
            </div>
            <div className="col-5">
              <img src={X_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <FooterAIMS />
    </div>
  );
};
export default Home;
