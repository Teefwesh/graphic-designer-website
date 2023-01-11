import React from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

import "./post.css";

const Post = ({ post }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await api.delete(`posts/${id}`);
      window.location.reload();
      navigate("/gallery");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post">
      <img src={`https://agprints.com.ng/Images/${post.img}`} alt="pics" />

      {isAuthenticated && (
        <div className="deleteIcon" onClick={() => handleDelete(post.id)}>
          <FaTimes className="icon" />
        </div>
      )}
    </div>
  );
};

export default Post;
