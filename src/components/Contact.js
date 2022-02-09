import React, {useEffect} from "react";
import {Container, Row, Col, Image, Button} from "react-bootstrap";
import Aos from "aos";

import contactus from "./../assets/medic_boy_2.svg";

import "aos/dist/aos.css";
import "./../css/contact.css";

export default function Contact() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className="contactDisplay">
      <Container>
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} data-aos="flip-left">
              <div className="my-5">
                <h3 className="contact-h3">Contact Us</h3>
                <h1 className="display-4 contact-h1">Get better care</h1>
                <p className="lead fw-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt labore
                  odio sed error! Nihil magnam iste nesciunt laudantium dolorem quo. Quibusdam
                  officiis voluptate magni delectus nihil, repudiandae commodi quas.
                </p>
                <Button type="button" variant="primary" className="contact-button">contact now <i class="bi bi-arrow-right"></i></Button>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} data-aos="flip-right">
              <Image src={contactus}></Image>
            </Col>
        </Row>
      </Container>
    </div>
  );
}