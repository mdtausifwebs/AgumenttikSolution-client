import React from "react";
import post from "../../styles/Homepage/post.module.css";
const Post = ({ item }) => {
  return (
    <div className={post.container}>
      <div className={post.images}>
        <img src={`${item}`} alt="" />
      </div>
      <div className={post.nameRate}>
        <div>indonesia</div>
        <div>4.5</div>
      </div>
      <div className={post.description}>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className={post.buttons}>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default Post;
