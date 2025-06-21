import React from "react";
import TourCard from "../../Shared/TourCard";
import { Col } from "reactstrap";
import { BASE_URL } from "../../Shared/utils/config";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader";

const FeatureTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  // console.log(featuredTours);
  return (
    <>
      {loading && <Loader />}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col
            xl="3"
            lg="4"
            md="6"
            sm="6"
            className="mb-4 px-sm-2 px-3"
            key={tour._id}
          >
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeatureTourList;
