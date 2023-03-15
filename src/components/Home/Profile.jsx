import React from "react";
import { AiFillStar } from "react-icons/ai";
import profilepic from "../../assets/profilepic.png";
import profile from "../../styles/Homepage/profile.module.css";
const Profile = ({ item }) => {
  return (
    <div className={profile.container}>
      <div className={profile.image}>
        <img src={profilepic} alt="" />
      </div>
      <div>
        <h1>Roman Rey</h1>
      </div>
      <div>
        <h2>Toranto Canada</h2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, et
          voluptas recusandae blanditiis ipsum, perspiciatis eos quaerat sit
          ullam nemo quos quia explicabo veritatis nesciunt vel fuga voluptatum
          aperiam sunt nam consectetur optio dolorem. Architecto, quis
          blanditiis laborum suscipit maiores, provident ipsam aut praesentium
          animi modi enim fugit possimus harum!
        </p>
      </div>
      <div>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    </div>
  );
};

export default Profile;
