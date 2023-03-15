import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loginuser, getuser } from "../../redux/ActionUser.js";

import Style from "./Css.module.css"
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.reducer);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [role, setrole] = useState();
  const submitHandler = async () => {
    const body = {
      email,
      password,
      role
    };
    await dispatch(Loginuser(body));
  };
  useEffect(() => {
    user && navigate("/profile");
  }, [user, navigate]);
  useEffect(() => {
    const verifyuser = async () => {
      await dispatch(getuser());
    };
    verifyuser();
  }, [dispatch, user]);
  return (
    <div className={Style.css1}>
      <h4 style={{ textAlign: "center", marginBottom:"20px" }}>    Login Here..</h4>
      <div className={Style.css}>
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

        <select style={{height:"38px", outline:"none", borderBottom:"none",borderLeft:"none", borderRight:"none"}}  onChange={(event)=>setrole(event.target.value)}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button className={Style.btn} onClick={submitHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
