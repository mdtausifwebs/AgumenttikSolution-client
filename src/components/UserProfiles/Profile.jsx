import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  getuser } from "../../redux/ActionUser.js";
import Filesget from "./Filesget.jsx";
import Filesupload from "./Filesupload.jsx";
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.reducer);
 
  useEffect(() => {
    !user && navigate("/");
  }, [user, navigate]);
  useEffect(() => {
    const verifyuser = async () => {
      await dispatch(getuser());
    };
    verifyuser();
  }, [dispatch, user]);
  return (
    <div>
      <div>
        <div>
          <h1>Profile</h1>
        </div>
        <div>
          {user && (
            <div>
              <h5>{user.name}</h5>
              <h5>{user.email}</h5>
            </div>
          )}
        </div>
        <div style={{width:"100%", display:"flex",border:"1px solid red"}}>
        
        </div>
        <div>
          <Filesupload />
        </div>
        <div>
          <Filesget />
        </div>
      </div>
    </div>
  );
};

export default Profile;
