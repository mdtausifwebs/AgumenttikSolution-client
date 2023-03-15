import React from "react";
import golstyle from "../../styles/gol/gol.module.css";
import Rectangle1 from "../../assets/Rectangle1.png";
import Rectangle2 from "../../assets/Rectangle2.png";
import Rectangle3 from "../../assets/Rectangle3.png";
import Rectangle4 from "../../assets/Rectangle4.png";
import Rectangle5 from "../../assets/Rectangle5.png";
import { CiFacebook } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import Certificate from "./Certificate";
const Gol = () => {
  return (
    <div className={golstyle.container}>
      <div className={golstyle.box}>
        <div className={golstyle.worldimg}>
          <h4>About Us</h4>
        </div>
        <div className={golstyle.teamsec}>
          <h1>Our Team</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className={golstyle.teamsmember}>
          <div className={golstyle.member}>
            <img src={Rectangle2} alt="" />
            <img src={Rectangle3} alt="" />
            <img src={Rectangle4} alt="" />
            <img src={Rectangle5} alt="" />
          </div>
          <div className={golstyle.profile}>
            <img src={Rectangle1} alt="" />
          </div>
          <div className={golstyle.about}>
            <h3>Lorem, ipsum dolor.</h3>
            <h4>Lorem ipsum dolor sit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              accusamus nihil, ex laboriosam consequuntur beatae voluptate
              ratione molestias ipsum autem deserunt necessitatibus. Fugit hic
              voluptates, sunt perspiciatis ut sint autem enim dicta numquam
              laboriosam nihil. Autem est animi facere, ea ipsam, qui esse
              perspiciatis quod saepe ducimus doloribus sequi quae.
            </p>
            <div className={golstyle.icons}>
              <Link to="/">
                <CiFacebook />
              </Link>
              <Link to="/">
                <BsTwitter />
              </Link>
            </div>
          </div>
        </div>
        <Certificate/>
      </div>
    </div>
  );
};

export default Gol;
