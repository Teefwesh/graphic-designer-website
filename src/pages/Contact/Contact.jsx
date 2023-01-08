import React from "react";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import BottomTab from "../../more/BottomTab";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <Navigation />

      <div className="contact">
        <h1>Contact Us</h1>
        <p>Send us a message now</p>
      </div>

      <Footer />
      <BottomTab />
    </>
  );
};

export default Contact;
