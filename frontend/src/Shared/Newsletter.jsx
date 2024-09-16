import React from "react";
import "./newsletter.css"

import {Container,Row,Col} from "reactstrap"
import maleTourist from "../assets/images/male-tourist.png"

const Newsletter = () => {
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg ='6'>
                    <div className="newsletter_content">
                        <h2>Subscribe now to get useful traveling information.</h2>
                    </div>
                    <div className="newsletter_input">
                        <input type="email" placeholder="Enter your email" />
                        <button className="newsletter_button btn">Subscribe</button>
                    </div>
                    <p className="newsletter_contents">Stay updated on the latest travel deals, tips, and exclusive offers! Subscribe to our newsletter now by sharing your email, and embark on unforgettable adventures with us. Don't miss out!</p>  
                </Col>
                <Col lg='6'>
                    <div className="newsletter_img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Newsletter;