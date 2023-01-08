import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./HeroSection.css";
import Banner from "../../images/banner.JPG";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  const openGallery = () => {
    navigate("/gallery");
  };

  return (
    <>
      <div className="heroSection">
        <div className="heroDesc">
          <p className="welcome">Welcome to</p>
          <h1 className="header">Amazing Grace Unlimited</h1>
          <p className="headerDesc">
            We combine{" "}
            <b style={{ color: "#1BC1B3", fontWeight: "900" }}>CREATIVITY</b>{" "}
            and{" "}
            <b style={{ color: "#F2A54D", fontWeight: "900" }}>PRODUCTIVITY</b>{" "}
            in every{" "}
            <b style={{ color: "#F35A78", fontWeight: "900" }}> DESIGN</b>.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur rerum exercitationem tenetur odio sit, quo eaque
            mollitia cupiditate cum sint sequi! Voluptas cumque blanditiis
            doloribus mollitia asperiores amet itaque! Quae.
          </p>

          <div className="buttons">
            <button className="myBtn">Contact</button>
            <button className="myBtn" onClick={openGallery}>
              Explore Designs
            </button>
          </div>
        </div>

        <div className="heroBanner">
          <img src={Banner} alt="hero banner" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
