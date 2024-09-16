import React from 'react'
import "../styles/Home.css";
import "../App.css";
import {Container,Row,Col} from 'reactstrap';
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from  "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png"
import Subtitle from '../Shared/Subtitle';
import Newsletter from '../Shared/Newsletter';

import SearchBar from '../Shared/SearchBar';
import ServicesList from '../services/ServicesList';
import FeatureTourList from '../components/Featured-tours/FeatureTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';


const Home = () => {
  return <>
  <section>
    <Container>
    {/* hero section starts */}
      <Row>
        <Col lg='6'>
        <div className="hero_content mt-5">
          <div className="hero_subtitle d-flex align-items-center">
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt=''/>
          </div>
          <h1> Traveling opens the door to creating <span className='highlight'>Memories</span></h1>
          <p>Unlock the beauty of exploration! Our tour booking platform invites you to create lasting memories through unique travel experiences. Join us and turn your dream journeys into unforgettable moments today!</p>
        </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box">
            <img src={heroImg} alt=""/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-4">
            <video src={heroVideo} alt=""/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-5 ">
            <img src={heroImg02} alt=""/>
          </div>
        </Col>
        <SearchBar />
      </Row>
    </Container>
    </section>
    {/* hero section ends */}
    
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services_subtitle">What we serve </h5>
            <h2 className="services_title">We offer the best services.</h2>
          </Col>
          <ServicesList/>
        </Row>
      </Container>
    </section>

    {/* feature tour section start */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
          <Subtitle subtitle={"Explore"}/>
          <h2 className="feature_tour-title">Our featured tours</h2>
          </Col>
          <FeatureTourList />
        </Row>
      </Container>
    </section>
    {/* feature tour section end*/}

    {/* experience section start */}
    <section>
      <Container>
        <Row>
          <Col lg='6' >
          <div className="experience_content">
            <Subtitle subtitle={'Experience'} />
            <h2> With our all experience<br/> we will serve you</h2>
            <p>With great services and best travel experiences we provide : </p>
          </div>
          <div className="counter_wrapper d-flex align-items-center gap-5">
            <div className="counter_box">
              <span>12k+</span>
              <h6>Successfull Trip</h6>
            </div>
            <div className="counter_box">
              <span>2k+</span>
              <h6>Regular clients</h6>
            </div>
            <div className="counter_box">
              <span>15</span>
              <h6>Years experience</h6>
            </div>
          </div>
          </Col>
          <Col lg='6'>
            <div className="experience_img">
              <img src={experienceImg} alt=''/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* experience section end */}

    {/* gallery section start */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery_title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* gallery section end */}

    {/* testimonal section start */}
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={"Fans Love"} />
          <h2 className="testimonial_title">What our fans say about us</h2>
        </Col>
        <Col lg='12'>
          <Testimonials/>
        </Col>
          
      </Row>
    </Container>

    {/* testimonal section end */}
    <Newsletter/>
  </>
}

export default Home