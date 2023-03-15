import React from "react";
import packagestyle from "../../styles/packages/packages.module.css";

import { BiSearch } from "react-icons/bi";
import Overviews from "./Overviews";
import Daywise from "./Daywise";

const Packages = () => {
  return (
    <div className={packagestyle.container}>
      <div className={packagestyle.packageBox}>
        <div className={packagestyle.packageMap}>
          <div>
            <div>
              <h1>Lorem ipsum</h1>
            </div>
            <div className={packagestyle.inputsec}>
              <input type="text" />
              <BiSearch />
            </div>
          </div>
        </div>
        <Overviews />
        <Daywise/>
      </div>
    </div>
  );
};

export default Packages;
