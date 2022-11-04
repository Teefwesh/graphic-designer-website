import React from "react";
import Business from "../../components/Business/Business";
import SimpleSlider from "../../components/GallerySlide/GallerySlide";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Business />
      <SimpleSlider />
    </div>
  );
};

export default Home;
