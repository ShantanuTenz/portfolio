import React from 'react';
import bootstrap from '../../img/bootstrap.svg';
import Cplusplus from '../../img/C++.svg';
import docker from '../../img/docker.svg';
import spring from '../../img/spring.svg';
import react from '../../img/react.svg';
import postgreSql from '../../img/postSql.svg';
import mySql from '../../img/mySql.svg';
import mongo from '../../img/mongoDB.svg';
import js from '../../img/javascript.svg';
import java from '../../img/java.svg';
import html from '../../img/html.svg';
import git from '../../img/git.svg';
import figma from '../../img/figma.svg';
import css from '../../img/css.svg';
import './circle.css'

// Array of imported images
const imagePaths = [
  bootstrap,
  Cplusplus,
  docker,
  spring,
  react,
  postgreSql,
  mySql,
  mongo,
  js,
  java,
  html,
  git,
  figma,
  css
];

const ImagesCircle = () => {
  const numImages = imagePaths.length;
  const angleStep = 360 / numImages; // Angle between each image

  return (
    <div className="circle-container">
      {imagePaths.map((src, i) => {
        const angle = angleStep * i;
        const radius = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--circle-radius')); // Get radius from CSS variable
        const x = radius * Math.cos((angle - 90) * (Math.PI / 180)); // Adjust angle for correct positioning
        const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

        const imageStyle = {
          position: 'absolute',
          width: '60px', 
          height: '60px', 
          objectFit: 'cover',
          left: `calc(50% + ${x}px - 30px)`, 
          top: `calc(50% + ${y}px - 30px)`, 
        };

        return <img key={i} className='imgs' src={src} alt={`Image ${i + 1}`} style={imageStyle} />;
     })}

    </div>
  );
};

export default ImagesCircle;

