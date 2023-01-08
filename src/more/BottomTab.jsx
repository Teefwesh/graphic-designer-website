import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle, BsPerson, BsChatDots, BsImage } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./BottomTab.css";

const BottomTab = () => {
  return (
    <div className="bottomTab">
      <Link to="/">
        <div className="iconContainer">
          <BsInfoCircle className="bottomNav " />
          <span className="iconDesc">About</span>
        </div>
      </Link>

      <Link to="/gallery">
        <div className="iconContainer">
          {/* <i className="fa-solid fa-image bottomNav"></i> */}
          <BsImage className="bottomNav " />
          <span className="iconDesc">Gallery</span>
        </div>
      </Link>

      <Link to="/#">
        <div className="iconContainer">
          <AiOutlineHome className="bottomNav" />
          <span className="iconDesc ">Home</span>
        </div>
      </Link>

      <Link to="/">
        <div className="iconContainer">
          <BsChatDots className="bottomNav" />
          <span className="iconDesc ">Contact</span>
        </div>
      </Link>

      <Link to="/login">
        <div className="iconContainer">
          <BsPerson className="bottomNav " />
          <span className="iconDesc">Login</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomTab;
