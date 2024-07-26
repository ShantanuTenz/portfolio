import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import codecrackersWeb from "../../img/codecrackersWeb.png";
import feedback from "../../img/feedbackFeature.png";
import foodApp from "../../img/foodApp.png";
import amazon from "../../img/amazonClone.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={codecrackersWeb} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={feedback} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foodApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amazon} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
