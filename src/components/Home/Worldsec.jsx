import React from "react";
import worldImage from "../../assets/world_map_PNG28 3.png";
import world from "../../styles/Homepage/worlds.module.css";
const Worldsec = () => {
  return (
    <div className={world.container}>
      <div className={world.box}>
        <div className={world.textsection}>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
            hic?
          </p>
        </div>
        <div className={world.imageSec}>
          <img src={`${worldImage}`} alt="" />
        </div>
        <div className={world.buttons}>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Worldsec;
