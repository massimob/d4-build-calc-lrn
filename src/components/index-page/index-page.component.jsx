import React, { useState } from "react";
import { Link } from "react-router-dom";

import ParticlesComponent from "../particles/particles.component";
import Footer from "../footer/footer.component";
import "../footer/index-footer.styles.scss";

import logo from "../../assets/logos/Diablo_IV_Logo_small-lrn.webp";
import "./index-page.styles.scss";

const IndexPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <div className="index-page-container">
      <div className="index-content">
        <div className="page-header"></div>
        <div className="menu-container">
          <div className="logo-container">
            <img src={logo} alt="Diablo IV" />
          </div>
          <div className="app-title">
            <h2>Build Calculator</h2>
          </div>
          <Link
            to="/class-menu"
            className="index-menu-item blz-button"
            type="primary"
          >
            Choose a class
          </Link>
          <Link
            to="https://diablo4.blizzard.com/en-us/#world"
            className="index-menu-item blz-button"
            type="primary"
            target="_blank"
          >
            Official Site
          </Link>
        </div>
      </div>
      {windowWidth >= 1030 && <ParticlesComponent />}
      <Footer className={"index-footer"} />
    </div>
  );
};

export default IndexPage;
