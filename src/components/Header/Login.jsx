import React from "react";
import loginstyle from "../../styles/Header/login.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/ActionUser";
function Login() {
  const { user } = useSelector((state) => state.reducer);
  // console.log('user', user?.user?._id);\
  const dispatch = useDispatch()
  const logoutHandler = async () => {
    await dispatch(logout());
  };
  return (
    <div className={loginstyle.login}>
      <div className={loginstyle.loginbtn}>
        {
          user?.user?._id ? <span onClick={logoutHandler} style={{cursor:"pointer"}}>Logout</span> : <Link to="/login">{"Login"}</Link>
        }
      </div>
      {
        user?.user?._id ? <>
          <div >
            <Link to="/changetemplate">Admin</Link>
          </div>
        </> : <div className={loginstyle.signupbtn}>
          <Link to="/signup"> Sign Up</Link>
        </div>
      }
    </div>
  );
}
export default Login;
