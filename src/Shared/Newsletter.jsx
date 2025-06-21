import React from "react";
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
import { motion } from "motion/react";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter rounded-4 px-4 py-2">
        <Row>
          <Col lg="6">
            <motion.div
              className="newsletter_content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
            >
              <h2>Subscribe now to get useful traveling information.</h2>
            </motion.div>
            <div className="newsletter_input">
              <input type="email" placeholder="Enter your email" required />
              <motion.button
                className="newsletter_button btn"
                whileTap={{ scale: 0.8, color: "black" }}
                whileHover={{ scale: 1.2, color: "black" }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="newsletter_contents">
              Stay updated on the latest travel deals, tips, and exclusive
              offers! Subscribe to our newsletter now by sharing your email, and
              embark on unforgettable adventures with us. Don't miss out!
            </p>
          </Col>
          <Col lg="6">
            <div className="newsletter_img">
              <motion.img
                src={maleTourist}
                drag
                dragConstraints={{
                  top: -2,
                  left: -2,
                  right: 2,
                  bottom: 2,
                }}
                dragElastic={0.5}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 20,
                }}
                whileDrag={{ cursor: "grabbing" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
