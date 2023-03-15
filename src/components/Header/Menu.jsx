import React from "react";
import menustyle from "../../styles/Header/menu.module.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className={menustyle.menu}>
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

export default Menu;
