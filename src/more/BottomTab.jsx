import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

import "./BottomTab.css";

const BottomTab = () => {
  return (
    <div className="bottomTab">
      <Link to="/">
        <div className="iconContainer">
          <BsInfoCircleFill className="bottomNav " />
          <span className="iconDesc">About</span>
        </div>
      </Link>

      <Link to="/gallery">
        <div className="iconContainer">
          <i className="fa-solid fa-image bottomNav"></i>
          <span className="iconDesc">Gallery</span>
        </div>
      </Link>

      <Link to="/#">
        <div className="iconContainer">
          <AiFillHome className="bottomNav " />
          <span className="iconDesc">Home</span>
        </div>
      </Link>

      <Link to="/">
        <div className="iconContainer">
          <AiFillMessage className="bottomNav " />
          <span className="iconDesc">Contact</span>
        </div>
      </Link>

      <Link to="/">
        <div className="iconContainer">
          <MdPerson className="bottomNav " />
          <span className="iconDesc">Login</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomTab;
