import React, { useEffect } from "react";
import Business from "../../components/Business/Business";
import SimpleSlider from "../../components/GallerySlide/GallerySlide";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <Business />
      <SimpleSlider />
    </div>
  );
};

export default Home;
