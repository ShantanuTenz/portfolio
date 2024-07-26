import React, { useContext, useEffect, useRef } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import boy2 from "../../img/boy2.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Leetcode from "../../img/Leetcode.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typed from "typed.js";
import gsap from "gsap";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Web Developer',
        'Software Engineer',
        'All time learner',
        'Front-End Developer',
        'Back-End Developer',
        'Full-Stack Developer',
        'JavaScript Enthusiast',
        'React Specialist',
        'Code Enthusiast',
        'Tech Innovator',
        'Problem Solver',
        'API Developer',
        'Continuous Learner',
        'Data Structures Expert',
        'Algorithm',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const imgRef = useRef(null);

  useEffect(()=>{

    const handleScroll = ()=> {
      const scrollPosition = window.pageYOffset;
      gsap.to(imgRef.current, {
        x: scrollPosition*-0.1,
        y: scrollPosition*0.5,
        ease: 'power3.Out',
      });
    };

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>My self</span>
          <span>Shantanu</span>
          <span style={{ fontSize: '2rem'}} ref={el}></span>
          <span>
          Versatile Full-Stack Developer with a strong background in frontend and backend development, committed to delivering exceptional and high-quality results.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/ShantanuTenz">
              <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shantanu-/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://leetcode.com/u/Shantanu_1/">
            <img className="leetcode" src={Leetcode} alt="" />
          </a> 
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img className="img1" src={Vector1} alt="" />
        <img className="img2" src={Vector2} alt="" />
        <img className="boy1" style={{height: '400px', width: '400px', position: 'absolute'}} src={boy2} alt="" />
        {/* animation */}

        <motion.img
          initial={{ left: "-36%"}}
          whileInView={{ left: "-24%"}}
          transition={transition}
          src={glassesimoji}
          alt=""
          ref={imgRef}
        /> 

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Geek" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
