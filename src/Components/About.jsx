import React from "react";
import A_Icon from "../Assets/Images/AIMS.png";
import user1 from "../Assets/Images/z.jpg";
import user2 from "../Assets/Images/jaya.png";
import user3 from "../Assets/Images/sunil1.png";
import FooterAIMS from "../CommonComponents/Footer";
import "../Components/About.css";

const About = () => {
  const handleNavigation = () => {
    window.location.href = "/";
  };
  
  return (
    <div>
      <header>
        <nav>
          <div className="logo" onClick={handleNavigation}>
            AIMS
          </div>
        </nav>
      </header>

      <section className="about">
        <h1>About Us</h1>
        <p className="para">Empowering Minds Since 1994.</p>
        <div className="about-info">
          <div className="about-img">
            <img src={A_Icon} alt="AIMS" />
          </div>
          <div>
            <p>
              {" "}
              AIMS Institutes established in the year 1994 by a group of eminent
              educationists and philanthropists to impart quality education and
              with a vision to expand the horizons of teaching-learning realms,
              where in, the students' intrapersonal and interpersonal
              disposition is groomed. It is a great pleasure to state that the
              AIMS fraternity is enduringly infusing resilient confidence among
              the students to excel in their academic, professional endeavors
              and personal lives. AIMS started with 2 UG programs and 60
              students and is now offering 6 PG. 10 UG programs and 2 PhD
              Programs having around 2000 students at the campus. AIMS has made
              a mark within a decade of its inception by consistently being
              ranked & rated as one of the best private B-Schools in the country
              by various rating agencies over the years. The Hospitality program
              has also been ranked among the best in the country and the
              graduates are widely accepted by leading chains in India and
              abroad. Also, students of various programs have been securing
              university ranks and setting high benchmarks consistently.
            </p>
            <button className="buttonClassAbout">Read More...</button>
          </div>
        </div>
      </section>

      <section className="team">
        <h1>Meet Our Faculties</h1>
        <div className="team-cards">
          <div className="card">
            <div className="card-img">
              <img src={user1} alt="User 1" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Dr. Meka Kiran G Reddy</h2>
              <p className="card-role">Professor & Principal</p>
              <p className="card-email"></p>
              <p>
                <button className="buttonClassAbout">Read</button>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={user2} alt="User 2" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Dr. Jayashree Nair</h2>
              <p className="card-role">Professor & Director AIQAC</p>
              <p className="card-email"></p>
              <p>
                <button className="buttonClassAbout">Read</button>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={user3} alt="User 3" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Mr. Sunil Kumar S.</h2>
              <p className="card-role">Professor / Director of MBA</p>
              <p className="card-email"></p>
              <p>
                <button className="buttonClassAbout">Read</button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterAIMS />
    </div>
  );
};

export default About;
