import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../Context";
import Resume from './resume.pdf';
import ImagesCircle from "./ImagesCircle";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  }

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>Delivering high-quality, fully developed,</span>
        <span>software products from concept to deployment.</span>

        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right */}

      <div className="right-div">
        <ImagesCircle/>
      </div>    

    </div>
  );
};

export default Services;
