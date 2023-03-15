import React from "react";
import post from "../../styles/Homepage/islandpost.module.css";
import { AiFillStar } from 'react-icons/ai';

const IslandPost = ({ item }) => {
  return (
    <div className={post.container}>
      <div className={post.images}>
        <img src={`${item}`} alt="" />
      </div>
      <div className={post.nameRate}>
        <div>indonesia</div>
      </div>
      <div className={post.description}>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className={post.buttons}>
        <div className={post.ratings}>
          <AiFillStar/>
          <div>4.5</div>
          <span>(1.5k Review)</span>
        </div>
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default IslandPost;
