import React, { useRef } from "react";
import "./Search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "./utils/config";
import { useNavigate } from "react-router-dom";
import { notifyError } from "./utils/toast";
import { motion } from "motion/react";

const SearchBar = () => {
  const locationRef = useRef(null);
  const distanceRef = useRef(null);
  const maxGroupSizeRef = useRef(null);
  const navigate = useNavigate();

  const SearchHandler = async (e) => {
    e.preventDefault();

    const location = locationRef.current.value.trim();
    const distance = distanceRef.current.value.trim();
    const maxGroupSize = maxGroupSizeRef.current.value.trim();

    // Input validation
    if (!location) {
      return notifyError("Location is required!");
    }

    // Build query dynamically
    let query = `city=${location}`;
    if (distance) query += `&distance=${distance}`;
    if (maxGroupSize) query += `&maxGroupSize=${maxGroupSize}`;

    try {
      const res = await fetch(
        `${BASE_URL}/tours/search/getTourBySearch?${query}`
      );

      if (!res.ok) {
        return notifyError("Something went wrong while searching!");
      }

      const result = await res.json();

      // Navigate to search page with query & result
      navigate(`/tours/search?${query}`, { state: result.data });
    } catch (err) {
      console.error(err);
      notifyError("Error occurred during search.");
    }
  };

  return (
    <Col lg="12">
      <div className="search_bar">
        <Form
          onSubmit={SearchHandler}
          className="d-flex align-items-center gap-4"
        >
          <FormGroup className="d-flex gap-3 form_group form_group-fast align-items-center">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
                required
                className="px-2 py-1"
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group form_group-last align-items-center">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance in Km"
                ref={distanceRef}
                className="px-2 py-1"
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group form_group-fast align-items-center">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input
                type="number"
                placeholder="0"
                ref={maxGroupSizeRef}
                required
                className="px-2 py-1"
              />
            </div>
          </FormGroup>

          <motion.span
            className="search_icon"
            onClick={SearchHandler}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
          >
            <i className="ri-search-line"></i>
          </motion.span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
