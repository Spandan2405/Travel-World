import React, { useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
// import tourData from "../assets/data/tours";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calcAvgRating from "../utils/avgRating";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Bookings/Booking";
import Newsletter from "../Shared/Newsletter";
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../utils/config.js";
import { AuthContext } from "./../context/Authcontext.js";
import { notifyError } from "../utils/toast.js";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRatings, setTourRatings] = useState(null);
  const { user } = useContext(AuthContext);
  // fetch data from database
  const { data: tour } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    address,
    maxGroupSize,
  } = tour;
  const { totalRating, avgRating } = calcAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  // submit request to our server
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    // later will call out api
    try {
      if (!user || user === undefined || user === null) {
        notifyError("Please sign in");
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRatings,
      };
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        notifyError(result.message);
      }
      notifyError(result.message);
    } catch (err) {
      notifyError(err.message);
    }
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour_content">
                <img src={photo} alt="" />
                <div className="tour_info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5"></div>
                  <span className="tour_rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-line"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <span>({reviews?.length})</span>
                    )}
                  </span>
                  <span>
                    <i className="ri-map-pin-line"></i> {address}
                  </span>
                </div>
                <div className="tour_extra-details">
                  <span>
                    <i className="ri-map-pin-line"></i> {city}
                  </span>
                  <span>
                    <HiOutlineCurrencyDollar /> {price}/ per person
                  </span>
                  <span>
                    <i className="ri-pin-distance-fill"></i> {distance} km
                  </span>
                  <span>
                    <i className="ri-group-line"></i> {maxGroupSize} people
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>
              {/* tour reviews section*/}
              <div className="tour_review mt-4">
                <h4>Reviews ({reviews?.length})</h4>

                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                    <span onClick={() => setTourRatings(1)}>
                      1<i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRatings(2)}>
                      2<i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRatings(3)}>
                      3<i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRatings(4)}>
                      4<i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRatings(5)}>
                      5<i className="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <div className="review_input">
                    <input
                      type="text"
                      ref={reviewMsgRef}
                      placeholder="share your thoughts"
                      required
                    />
                    <button
                      className="btn primary_btn text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
                <ListGroup className="user_reviews mt-4">
                  {reviews?.map((review) => (
                    <>
                      <div className="review_item bg-light rounded-3 p-2">
                        <img src={avatar} alt="" />
                        <div className="w-100 ">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>
                                {new Date(review.createdAt).toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating}
                              <i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    </>
                  ))}
                </ListGroup>
              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
