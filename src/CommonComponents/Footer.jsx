import React from "react";
import Y_icon from "../Assets/Images/play-store.png";
import Z_icon from "../Assets/Images/app-store.png";
import A1_icon from "../Assets/Images/2.png";

const FooterAIMS = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Dowmload App for Android and ios mobile phone.</p>
            <div className="app-logo">
              <img src={Y_icon} alt="Y_Icon" />
              <img src={Z_icon} alt="Z_Icon" />
            </div>
          </div>
          <div className="footer-col-2">
            <img src={A1_icon} alt="" />
            <p> Empowering Minds Since 1994</p>
          </div>
          <div className="footer-col-3">
            <h3>Contact Us</h3>
            <ul>
              <li>Admission- +91-815-000-1994</li>
              <li>admission@theaims.ac.in</li>
              <li>Reception- +91-(080)-28390433 / 28390434</li>
              <li>marketing@theaims.ac.in.</li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3>Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Whatsapp</li>
              <li>Linkdin</li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="copyright">Copyright 2024 - Arnab Pal</p>
      </div>
    </div>
  );
};

export default FooterAIMS;
