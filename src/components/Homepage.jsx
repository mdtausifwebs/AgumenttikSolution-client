import React from "react";
import BestPackage from "./Home/BestPackage";
import BookingSection from "./Home/BookingSection";
import HeroSection from "./Home/HeroSection";
import IslandStaysSec from "./Home/IslandStaysSec";
import Profilesec from "./Home/Profilesec";
import Worldsec from "./Home/Worldsec";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <BookingSection />
      <BestPackage />
      <IslandStaysSec />
      <Worldsec />
      <Profilesec />
    </div>
  );
};

export default Homepage;
