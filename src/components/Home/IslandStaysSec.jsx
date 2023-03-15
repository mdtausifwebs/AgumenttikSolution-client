import React from "react";
import island from "../../styles/Homepage/islandstay.module.css";
import IslandPost from "./IslandPost";
import beach from "../../assets/beach.png";
import boat from "../../assets/boat.png";
import ship from "../../assets/ship.png";
const IslandStaysSec = () => {
  const images = [boat, ship, beach];
  return (
    <div className={island.container}>
      <div className={island.box}>
        <div className={island.heading}>
          <h1>Islands Stays </h1>
        </div>
        <div className={island.heading}>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
            dolores laborum fugit dolor nemo et numquam asperiores quaerat
            explicabo enim.
          </span>
        </div>
        <div className={island.islandPost}>
          {images.map((item, i) => {
            return <IslandPost item={item} key={i} />;
          })}
        </div>
        <div className={island.islandPost}>
          {images.map((item, i) => {
            return <IslandPost item={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default IslandStaysSec;
