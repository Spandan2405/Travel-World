import React from "react";
import "./Footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick_links1 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p className="d-none d-md-block">
                Discover customized travel experiences and expert guidance on
                our website, designed to help you create unforgettable memories
                on every adventure!
              </p>
              <div className="social_links d-flex align-items-center justify-content-center gap-4 mb-3">
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col>
            <h5 className="footer_link-title">Discover</h5>
            <ListGroup className="footer_quick-links d-flex flex-md-column">
              {quick_links1.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup className="footer_quick-links d-flex flex-md-column">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col sm="3">
            <h5 className="footer_link-title">Contacts</h5>
            <ListGroup className="footer_quick-links">
              <ListGroupItem className="border-0 p-0 d-flex align-items-center gap-3 mt-2">
                <p>
                  <span>
                    <i className="ri-map-pin-line"></i>
                    Address:
                  </span>
                  Gujarat,India
                </p>
              </ListGroupItem>
              <ListGroupItem className="border-0 p-0  d-flex align-items-center gap-3">
                <p>
                  <span>
                    <i className="ri-mail-line"></i>
                    Email:
                  </span>
                  spandan2405@gmail.com
                </p>
              </ListGroupItem>
              <ListGroupItem className="border-0 p-0 d-flex align-items-center gap-3">
                <p>
                  <span>
                    <i className="ri-map-pin-line"></i>
                    Phone:
                  </span>
                  +0123456789
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-3 pt-md-5">
            <p className="copyright">
              Copyright {year} ,design and developed by Spandan Gupta . All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
