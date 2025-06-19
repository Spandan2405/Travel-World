import React from "react";
import ServicesList from "../services/ServicesList";
import { Col, Container, Row } from "reactstrap";
import Subtitle from "../Shared/Subtitle";
import Testimonials from "../components/Testimonial/Testimonials";

function About() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">What we serve </h5>
              <h2 className="services_title">We offer the best services.</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* testimonal section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial_title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* testimonal section end */}
    </>
  );
}

export default About;
