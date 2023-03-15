import React from "react";
import footerstyle from "../../styles/Homepage/footersex.module.css";
import { Link } from "react-router-dom";
import appimg from "../../assets/Google Play.png";
import mobimg from "../../assets/mobile.png";
// import mobback from "../../assets/mobback.png";
// import circle from "../../assets/circle.png";

const FooterSec = () => {
  return (
    <div className={footerstyle.container}>
      <div className={footerstyle.box}>
        <div className={footerstyle.flowSec}>
          <div className={footerstyle.downloadsec}>
            <div>Download Our App</div>
            <div>The best travel in the world</div>
            <div>
              <img src={appimg} alt="" />
            </div>
          </div>
          <div className={footerstyle.cirlesec}>
            {/* <img src={circle} alt="" />
            <img src={circle} alt="" />
            <img src={circle} alt="" />
            <img src={circle} alt="" />
            <img src={circle} alt="" /> */}
          </div>
          <div className={footerstyle.mobsec}>
            {/* <img src={mobback} alt="" /> */}
            <img src={mobimg} alt="" />
          </div>
        </div>
        <div className={footerstyle.blank}></div>
        <div className={footerstyle.footermenu}>
          <div className={footerstyle.footerlogo}>
            <div>logo</div>
            <div>Lorem ipsum dolor sit amet.</div>
            <div>social media</div>
          </div>
          <div className={footerstyle.companysec}>
            <Link to="/">
              <h4>Company</h4>
            </Link>
            <Link to="/">Event</Link>
            <Link to="/">Blogs</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Join US</Link>
          </div>
          <div className={footerstyle.aboutsc}>
            <Link to="/">
              <h4>About</h4>
            </Link>
            <Link to="/">Project</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Services</Link>
            <Link to="/">Our Story</Link>
          </div>
          <div className={footerstyle.contactsec}>
            <Link to="/">
              <h4>Contact Us</h4>
            </Link>
            <Link to="/">abc@gmail.com</Link>
            <Link to="/">India</Link>
          </div>
        </div>
        <div className={footerstyle.hrLine}></div>
        <div className={footerstyle.footercopy}>
          <p>
            copy right Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nemo, ut?
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSec;
