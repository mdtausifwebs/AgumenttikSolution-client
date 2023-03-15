import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Style from "./Css.module.css"

import { Loginuser, getuser } from "../../redux/ActionUser.js";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setname] = useState();
  const { user } = useSelector((state) => state.reducer);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  useEffect(() => {
    user && navigate("/profile");
  }, [user, navigate]);
  const submitHandler = async () => {
    const body = {
      name,
      email,
      password,
    };
    await dispatch(Loginuser(body));
  };
  useEffect(() => {
    const verifyuser = async () => {
      await dispatch(getuser());
    };
    verifyuser();
  }, [dispatch, user]);
  return (
    <div className={Style.css1}>
      <h4 style={{ textAlign: "center", marginBottom:"20px" }}>    Sign Up Here..</h4>

      <div className={Style.css}>
        <input
        className={Style.input}
          type="text"
          placeholder="Name Here....."

          onChange={(e) => setname(e.target.value)}
        />
        <input
        className={Style.input}
          type="text"
          placeholder="Email Here....."

          onChange={(e) => setemail(e.target.value)}
        />
        <input
        className={Style.input}
          type="text"
          placeholder="Password Here....."

          onChange={(e) => setpassword(e.target.value)}
        />
        <button className={Style.btn} onClick={submitHandler}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;
