import React from "react";
// import { AiFillDelete } from "react-icons/ai";

import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={`http://agprints.com.ng/Images/${post.img}`} alt="pics" />
      {/* <div className="deleteIcon">
        <AiFillDelete className="icon" />
      </div> */}
    </div>
  );
};

export default Post;
