import React from "react";
import herosection from "../../styles/Homepage/heroSection.module.css";
import images from "../../assets/herosec.png";
import { Link } from "react-router-dom";
import airline from "../../assets/plain.png"
const HeroSection = () => {
  return (
    <div className={herosection.heroSec}>
      <div className={herosection.leftsec}>
        <div className={herosection.visit}>
          <span>Visit</span>
       <img style={{width:"20px", backgroundColor:"rgb(239,251,254)" , border:"none"}} src="https://w7.pngwing.com/pngs/584/769/png-transparent-north-compass-computer-icons-cardinal-direction-compass-needle-angle-triangle-technic-thumbnail.png" alt="" />
        </div>
        <div className={herosection.textsec}>
          <h1>The Exotic</h1>
          <h1>Lakshadweep</h1>
          <h1>Islands</h1>
        </div>
        <div className={herosection.discover}>
          <Link to="/">Discover Now</Link>
          <img src={`${airline}`} alt="" />
        </div>
      </div>
      <div className={herosection.imagesec}>
        <img src={`${images}`} alt="" />
      </div>
     
    </div>
  );
};

export default HeroSection;
