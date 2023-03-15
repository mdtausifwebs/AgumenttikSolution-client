import React from "react";
import logostyle from "../../styles/Header/logo.module.css";
import logo from "../../assets/gol-logo 1.jpg";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className={logostyle.logo}>
      <Link to="/">
        <img src={`${logo}`} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
