import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";
import { AnimatePresence, motion } from "motion/react";
import "./MasonryImages.css";

const MasonryImagesGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}
        className="gallery"
      >
        <Masonry gutter="1rem">
          {galleryImages.map((item, index) => (
            <motion.img
              className="masonry_img thumbnail"
              key={index}
              src={item}
              alt=""
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
              layoutId={`image-${index}`}
              onClick={() => setSelectedImg(index)}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
                ease: ["easeIn", "easeOut"],
              }}
              // onError={(e) => console.log(`Error loading image at index ${index}:`, e)}
            />
          ))}
        </Masonry>

        <AnimatePresence>
          {selectedImg !== null && (
            <motion.div
              className="overlay"
              onClick={() => setSelectedImg(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={galleryImages[selectedImg]}
                layoutId={`image-${selectedImg}`}
                className="lightbox-img"
                transition={{
                  duration: 0.5,
                  ease: ["easeIn", "easeOut"],
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </ResponsiveMasonry>
    </>
  );
};

export default MasonryImagesGallery;
