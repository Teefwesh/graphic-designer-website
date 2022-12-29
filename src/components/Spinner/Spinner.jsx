import React from "react";

import "./Spinner.css";
import Logo from "../../images/mylogo.png";

const Spinner = () => {
  return (
    <div>
      <img src={Logo} alt="logo" className="loadScreen" />
    </div>
  );
};

export default Spinner;
