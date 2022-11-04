import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

import "./GallerySlide.css";
import { gallery } from "../../constant/galleryData";

function SimpleSlider() {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 5000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="gallery">
      <h1 data-aos="fade-left" data-aos-easing="ease-in-sine">
        Our Work
      </h1>
      <Slider {...settings}>
        {gallery.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "400px",
              }}
            />
          </div>
        ))}
      </Slider>
      <div
        style={{ textAlign: "center" }}
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
      >
        <button className="view">View all</button>
      </div>
    </div>
  );
}

export default SimpleSlider;
