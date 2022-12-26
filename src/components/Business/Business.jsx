import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Business.css";
import { services } from "../../constant/servicesNav";

const Business = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="businessSection" id="services">
      <h1
        style={{ textAlign: "center", color: "#040349" }}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        Our Services
      </h1>
      <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        We provide the best services for our customers
      </p>
      <div className="services">
        {services.map((service) => (
          <div className="cardContainer" key={service.id}>
            <div className="cardImg">
              <img src={service.img} alt={service.name} />
            </div>
            <div className="cardDesc">
              <h2>{service.name} </h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;
