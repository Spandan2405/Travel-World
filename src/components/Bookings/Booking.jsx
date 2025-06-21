import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Authcontext";
import { BASE_URL } from "../../Shared/utils/config";
import { notifyError } from "../../Shared/utils/toast";
import { motion } from "motion/react";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState({
    userId: user?._id,
    userEmail: user?.email,
    tourName: title ?? "",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });
  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);
  //send data to the server
  const handleClick = async (e) => {
    e.preventDefault();

    // console.log(booking, title);
    try {
      if (!user || user === undefined || user === null) {
        return notifyError("Please sign in");
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      const result = await res.json();
      // console.log(result);
      if (!res.ok) {
        return notifyError(result.message);
      }
      navigate("/thank-you");
    } catch (err) {
      notifyError(err.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour_rating d-flex align-items-center">
          <i className="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking_info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center justify-content-between">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              value={booking.guestSize}
              required
              onChange={handleChange}
            />
          </FormGroup>

          {/* booking bottom */}
          <div className="booking_bottom">
            <ListGroup>
              <ListGroupItem className="border-0 px-0">
                <h5 className="d-flex align-items-center gap-1">
                  ${price} <i className="ri-close-line"></i> {booking.guestSize}{" "}
                  {booking.guestSize > 1 ? "people" : "person"}
                </h5>
                <span>${Number(price) * Number(booking.guestSize)}</span>
              </ListGroupItem>

              <ListGroupItem className="border-0 px-0">
                <h5>Service charge</h5>
                <span>$10</span>
              </ListGroupItem>
              <ListGroupItem className="border-0 px-0 total">
                <h5>Total </h5>
                <span>${totalAmount}</span>
              </ListGroupItem>
            </ListGroup>

            <motion.button
              className="btn w-100 mt-4 rounded-4"
              type="submit"
              whileTap={{ scale: 0.9, color: "black" }}
              whileHover={{
                scale: 1.1,
                color: "black",
                border: "2px solid black",
                x: [0, 5, -5, 5, -5, 0],
              }}
              transition={{ duration: 0.5 }}
            >
              Book Now
            </motion.button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Booking;
