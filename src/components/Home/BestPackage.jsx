import React from "react";
import { Link } from "react-router-dom";
import bestpackage from "../../styles/Homepage/bestpackage.module.css";
import Post from "./Post";
import beach from "../../assets/beach.png";
import boat from "../../assets/boat.png";
import ship from "../../assets/ship.png";
const BestPackage = () => {
  const images = [boat, ship, beach];
  return (
    <div className={bestpackage.packageCont}>
      <div className={bestpackage.packageSec}>
        <div className={bestpackage.packageHead}>
          <h1>Best packages for you </h1>
          <p>
          In general, a higher the discount means that there is a greater the level of risk associated with an investment and its future cash flows.
          </p>
        </div>
        <div className={bestpackage.packageMenu}>
          <div>
            <Link id={bestpackage.backColor} to="/">
              Home
            </Link>
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className={bestpackage.packagePost}>
          {images.map((item, i) => {
            return <Post item={item} key={i} />;
          })}
        </div>
        <div className={bestpackage.radio}>
          <input type="radio" name="select" />
          <input type="radio" name="select" />
          <input type="radio" name="select" />
        </div>
        <div className={bestpackage.discover}>
          <button>Discover more</button>
        </div>
      </div>
    </div>
  );
};

export default BestPackage;
