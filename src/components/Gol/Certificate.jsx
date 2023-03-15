import React from "react";
import video from "../../assets/video.png";
import certificateStyle from "../../styles/gol/certificate.module.css";
const Certificate = () => {
  return (
    <div className={certificateStyle.container}>
      <div className={certificateStyle.head}>
        <h1>Certificate</h1>
      </div>
      <div className={certificateStyle.para}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        </p>
      </div>
      <div className={certificateStyle.images}>
        <img src={video} alt="" />
        <img src={video} alt="" />
        <img src={video} alt="" />
        <img src={video} alt="" />
      </div>
    </div>
  );
};

export default Certificate;
