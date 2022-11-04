import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Navbar.css";
// import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ routes }) => {
  return (
    <div className="mainContainer">
      <div className="navContainer">
        <div className="navLogo">
          <Link to="/">Amazing Grace</Link>
        </div>

        <div className="rightNab">
          {/* <div className="menu">
            <GiHamburgerMenu style={{ width: "2rem", height: "2rem" }} />
          </div> */}
          <div className="navRoutes">
            {routes.map((route) => (
              <Link to={route.link} key={route.name} className="navRoute">
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
