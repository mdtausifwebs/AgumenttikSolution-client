import React from "react";
import Profile from "./Profile";
import profilesec from "../../styles/Homepage/Profilesec.module.css";
const Profilesec = () => {
  return (
    <div className={profilesec.container}>
      <div className={profilesec.box}>
        <div className={profilesec.head}>
          <h1>What Our Client Says </h1>
          <h1>About Us</h1>
        </div>
        <div className={profilesec.profile}>
          <Profile />;
          <Profile />;
          <Profile />;
        </div>
        <div className={profilesec.radio}>
          <input type="radio" name="select" />
          <input type="radio" name="select" />
          <input type="radio" name="select" />
        </div>
      </div>
    </div>
  );
};

export default Profilesec;
