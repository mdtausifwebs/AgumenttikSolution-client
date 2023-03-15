import React from "react";
import menustyle from "../../styles/Header/menu.module.css";
import { Link } from "react-router-dom";
const MenuHembaerg = () => {

  
  return (
    <div className={menustyle.hemberge}>
      <div>
        <Link to="/reservation">Find Reservation</Link>
      </div>
      <div>
        <Link to="/packages">Packages</Link>
      </div>{" "}
      <div>
        <Link to="/aboutlakshweep">About Lakshdweep</Link>
      </div>{" "}
      <div>
        <Link to="/aboutus">About Us</Link>
      </div>
      <div>
        <Link to="/gol">Gol</Link>
      </div>
      <div>
        <Link to="/suppot">Support</Link>
      </div>
    </div>
  );
};

export default MenuHembaerg;
