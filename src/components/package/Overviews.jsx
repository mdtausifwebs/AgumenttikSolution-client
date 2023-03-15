import React from "react";
import { Link } from "react-router-dom";
import seaimage from "../../assets/packageOver.png";
import Overviewsstyle from "../../styles/packages/packageover.module.css";
import { BsUmbrella } from "react-icons/bs";
import { MdLocationCity } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const Overviews = () => {
  return (
    <div className={Overviewsstyle.container}>
      <div className={Overviewsstyle.box}>
        <div className={Overviewsstyle.overviews}>
          <div className={Overviewsstyle.head}>
            <Link to="/">lorem</Link>
            <Link to="/">lorem</Link>
            <Link to="/">lorem</Link>
          </div>
          <div className={Overviewsstyle.images}>
            <img src={seaimage} alt="" />
          </div>
          <div>
            <h1>Lorem, ipsum dolor.</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              magni harum saepe quaerat vero eos dolor itaque eveniet, fugit
              aspernatur nihil fuga ratione maiores quasi suscipit. Laudantium
              autem nisi nulla voluptas eos expedita consectetur beatae
              assumenda ea non fugit doloremque fugiat nihil corporis minima
              itaque aspernatur soluta repellendus, laborum error, eum dicta?
              Eius laborum architecto mollitia numquam eligendi vero assumenda
              quo accusantium laudantium fugiat voluptatum aliquid aut rerum ab,
              itaque ducimus alias ullam accusamus sint, quibusdam dolores,
              impedit consequuntur. Dolorum, corporis magnam unde modi quo porro
              tenetur dignissimos hic nobis consectetur voluptas tempore
              possimus voluptatibus ipsam id pariatur vitae distinctio nemo
              delectus iure? Vel recusandae nobis itaque voluptas eos laudantium
              fugit, illo dolorum modi voluptate commodi perferendis aspernatur
              suscipit? Eos, esse molestias vitae dolores reiciendis animi enim
              aliquam amet libero fugiat consequatur provident facere
              praesentium, mollitia totam ullam iste quaerat! Commodi veniam
              fugiat harum excepturi amet eligendi molestiae accusamus placeat
              vero, animi impedit quas nobis fuga, repellat temporibus
              perspiciatis reiciendis nemo praesentium? Vitae, fugit. Tenetur
              neque quae perferendis, repellendus non aperiam soluta
              reprehenderit dolores ea quasi architecto excepturi magni
              reiciendis, doloribus maiores impedit assumenda, quas eos vero.
              Illum est repudiandae, quo iste ex animi dignissimos ducimus natus
              iusto, consectetur quae.
            </p>
          </div>
          <div>line</div>
        </div>
        <div className={Overviewsstyle.starting}>
          <div className={Overviewsstyle.start}>
            <p>Starting from</p>
            <p>Rs 509999</p>
          </div>
          <div className={Overviewsstyle.headline}>
            <div>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className={Overviewsstyle.formsec}>
            <div className={Overviewsstyle.inputs}>
              <div>package name</div>
              <div className={Overviewsstyle.inputBox}>
                <BsUmbrella />
                <input type="text" />
              </div>
            </div>
            <div className={Overviewsstyle.inputs}>
              <div>package name</div>
              <div className={Overviewsstyle.inputBox}>
                <MdLocationCity />
                <input type="text" />
              </div>
            </div>
            <div className={Overviewsstyle.inputs}>
              <div>package name</div>
              <div className={Overviewsstyle.inputBox}>
                <MdOutlineCalendarMonth />
                <input type="text" />
              </div>
            </div>
            <div className={Overviewsstyle.inputs}>
              <div>package name</div>
              <div className={Overviewsstyle.adult}>
                <div>
                  <div>
                    <span>Adult</span>
                  </div>
                  <div>
                    <button>-</button>
                    <button>2</button>
                    <button>+</button>
                  </div>
                </div>
                <div>
                  <div>
                    <span>Child</span>
                  </div>
                  <div>
                    <button>-</button>
                    <button>0</button>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={Overviewsstyle.detalis}>
              <div>Contact Details</div>
              <div></div>
            </div>
            <div className={Overviewsstyle.inputs}>
              <div className={Overviewsstyle.inputBox}>
                <CgProfile />
                <input type="text" />
              </div>
            </div>
            <div className={Overviewsstyle.inputs}>
              <div className={Overviewsstyle.inputBox}>
                <CiMail />
                <input type="text" />
              </div>
            </div>
            <div className={Overviewsstyle.mobnum}>
              <div className={Overviewsstyle.inputBox}>+91</div>
              <div className={Overviewsstyle.inputBox}>
                <FiPhoneCall />
                <input type="text" />
              </div>
            </div>
            <div className={Overviewsstyle.hrlineOr}>
              <div></div>
              <div>Or</div>
              <div></div>
            </div>
            <div className={Overviewsstyle.booknow}>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overviews;
