import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./tour-card.css";
import calcAvgRating from "./utils/avgRating";
import { motion } from "motion/react";

const TourCard = ({ tour }) => {
  const { _id, title, city, photo, price, reviews } = tour;
  console.log(tour);

  const { totalRating, avgRating } = calcAvgRating(reviews);
  return (
    <motion.div
      className="tour_card"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      drag={window.innerWidth >= 768 ? true : false}
      dragConstraints={{ left: -1, right: 1, top: -1, bottom: 1 }}
      dragElastic={0.5}
      whileDrag={{ scale: 1.05, zIndex: 10 }}
    >
      <Card>
        <div className="tour_img">
          <img src={photo} alt="tour_img" />
          <motion.span
            className="position-absolute bottom-0 end-0"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Featured
          </motion.span>
        </div>

        <CardBody>
          <div className="card_top d-flex align-items-center justify-content-between">
            <span className="tour_location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i>
              {city}
            </span>
            <span className="tour_rating d-flex align-items-center gap-1">
              <i className="ri-star-line"></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>{`(${reviews.length})`}</span>
              )}
            </span>
          </div>
          <h5 className="tour_title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>
          <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span>/per person</span>
            </h5>
            <motion.button
              className="btn booking_button"
              whileTap={{ scale: 0.9, color: "black" }}
              whileHover={{
                scale: 1.1,
                color: "black",
                border: "2px solid black",
                x: [0, 5, -5, 5, -5, 0],
              }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </motion.button>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default TourCard;
