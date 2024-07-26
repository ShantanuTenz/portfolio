import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github-logo.png";
import LinkedIn from "../../img/Linkedin-logo.png";
import Leetcode from "../../img/Leetcode.png";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shantanueducation8@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/ShantanuTenz">
              <img style={{height:"40px", width:"40px"}} src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shantanu-/">
            <img style={{height:"40px", width:"40px"}} src={LinkedIn} alt="" />
          </a>
          <a href="https://leetcode.com/u/Shantanu_1/">
            <img style={{height:"40px", width:"40px"}} className="leetcode" src={Leetcode} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
