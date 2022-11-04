import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./HeroSection.css";
import Banner from "../../images/banner.jpeg";
import Curve from "../../components/curve/curve";
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
        <div
          className="heroDesc"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <p className="welcome">Welcome to</p>
          <h1 className="header">Amazing Grace Unlimited</h1>
          <p className="headerDesc">
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
      <Curve />
    </>
  );
};

export default HeroSection;
