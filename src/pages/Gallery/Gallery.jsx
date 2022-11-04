import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { GiHamburgerMenu } from "react-icons/gi";

import { mainGallery } from "../../constant/mainGalleryData";
import "./Gallery.css";

const Gallery = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(mainGallery)
      : setFilteredImages(mainGallery.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="mainGallery">
      <div className="menu">
        <GiHamburgerMenu style={{ width: "2rem", height: "2rem" }} />
      </div>
      <div className="gallerySubNav">
        <div className="default">WORK GALLERY</div>

        <div className="tags">
          <TagButton
            name="all"
            handleSetTag={setTag}
            tagActive={tag === "all" ? true : false}
          />

          <TagButton
            name="cards"
            handleSetTag={setTag}
            tagActive={tag === "cards" ? true : false}
          />

          <TagButton
            name="logo"
            handleSetTag={setTag}
            tagActive={tag === "logo" ? true : false}
          />

          <TagButton
            name="flyers"
            handleSetTag={setTag}
            tagActive={tag === "flyers" ? true : false}
          />

          <TagButton
            name="printing"
            handleSetTag={setTag}
            tagActive={tag === "printing" ? true : false}
          />

          <TagButton
            name="product-packaging"
            handleSetTag={setTag}
            tagActive={tag === "product-packaging" ? true : false}
          />
        </div>
      </div>

      <motion.div layout className="image-container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {filteredImages.map((item) => (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                key={item.id}
                className="image-card"
              >
                <img
                  src={item.image}
                  alt=""
                  className="image"
                  // style={{ width: "25rem", height: "25rem" }}
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </motion.div>
    </div>
  );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <NavLink
      onClick={() => handleSetTag(name)}
      className={`galleryNav ${tagActive ? "activate" : null}`}
    >
      {name.toUpperCase()}
    </NavLink>
  );
};

export default Gallery;
