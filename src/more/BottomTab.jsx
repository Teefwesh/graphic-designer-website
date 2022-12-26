import React from "react";
import { AiFillSetting, AiFillHome, AiFillMessage } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

import "./BottomTab.css";

const BottomTab = () => {
  return (
    <div className="bottomTab">
      <Link to="/">
        <AiFillSetting className="bottomNav settings" />
      </Link>

      <Link to="/gallery">
        <i className="fa-solid fa-image bottomNav"></i>
      </Link>

      <Link to="/">
        <AiFillHome className="bottomNav home" />
      </Link>

      <Link to="/">
        <AiFillMessage className="bottomNav msg" />
      </Link>

      <Link to="/">
        <MdPerson className="bottomNav login" />
      </Link>
    </div>
  );
};

export default BottomTab;
