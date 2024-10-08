import React from 'react'
import TourCard from '../../Shared/TourCard'
import {Col} from 'reactstrap'
import { BASE_URL } from '../../utils/config'
import useFetch from '../../hooks/useFetch'

const FeatureTourList = () => {
  const  {data: featuredTours,loading,error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  // console.log(featuredTours);
  return <>
        {
          loading && <h4>Loading .........</h4>
        }
        {
          error && <h4>{error}</h4>
        }
        {!loading && !error && featuredTours?.map(tour=> (
          <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}>
                <TourCard tour={tour} />
          </Col> 
        ))
    }
  </>
};

export default FeatureTourList;