import React, { useState } from "react";
import Login from "./Login";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuHembaerg from "./MenuHembaerg";
import headerstyle from "../../styles/Header/header.module.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  window.addEventListener("click", (event) => {
    if (event.target.id === "target") {
      setToggle(false);
    } else {
      console.log("event.target.id", event.target.id);
    }
  });
  return (
    <div className={headerstyle.header}>
      <Logo />
      <div
        className={headerstyle.none}
        style={
          toggle
            ? {
                width: "100vh",
                zIndex: 9999,
                position: "absolute",
                left: "5px",
                height: "100vh",
              }
            : {}
        }
        id="target"
      >
        <div
          className={headerstyle.Hamberge}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <img
              style={{ width: "30px", borderRadius: "50px" }}
              src="https://cdn-icons-png.flaticon.com/512/66/66847.png"
              alt=""
            />
          ) : (
            <img
              style={{ width: "30px", borderRadius: "50px" }}
              src="https://media.istockphoto.com/id/1186972006/vector/typing-text-chat-isolated-vector-icon-modern-geometric-illustration-three-dots-for-your.jpg?s=612x612&w=0&k=20&c=Yuz5f5Vy6gAFo0XLPRQ9FWRqroJa38C7Fd4rlIoGGLQ="
              alt=""
            />
          )}
        </div>
      </div>
      {toggle ? <MenuHembaerg /> : <></>}
      <Menu />
      <Login />
    </div>
  );
};
export default Header;
