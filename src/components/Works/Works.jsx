import React, { useContext, useEffect } from "react";
import "./Works.css";
import codecrackers from '../../img/codecrackers.jpg';
import cafeHookers from '../../img/cafeHooker.png';
import ngi from '../../img/NGI.png';
import storeweb from '../../img/storeWeb.png';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 

  useEffect(() => {
    const secCircles = document.querySelectorAll('.w-secCircle');

    gsap.fromTo(secCircles, 
      {
        opacity: 0,
        scale: 0.5,
        x: (i) => (i % 2 === 0 ? '-200%' : '200%'),
        y: (i) => (i % 2 === 0 ? '-200%' : '200%')
      }, 
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: ".w-mainCircle",
          start: "top bottom", // when the top of the w-mainCircle hits the bottom of the viewport
          end: "center center", // when the bottom of the w-mainCircle hits the top of the viewport
          scrub: true, // smooth scrubbing
        },
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          I have extensive experience working with a diverse range 
            <br />
            of brands and clients. My expertise spans various industries,
            <br />
            ensuring that I deliver high-quality and
            <br />
            impactful results for every project.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img className="cafe" src={cafeHookers} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="cafe" src={storeweb} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="cafe" src={codecrackers} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="cafe" style={{ objectFit: 'contain' }} src={ngi} alt="" />
          </div>
          <div className="w-secCircle">
            Yours...
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
