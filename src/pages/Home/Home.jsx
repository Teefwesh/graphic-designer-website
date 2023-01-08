import React, { useEffect } from "react";
import Business from "../../components/Business/Business";
import SimpleSlider from "../../components/GallerySlide/GallerySlide";
import Navigation from "../../components/Navigation/Navigation";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import BottomTab from "../../more/BottomTab";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <HeroSection />
      <Business />
      <SimpleSlider />
      <Footer />
      <BottomTab />
    </div>
  );
};

export default Home;
