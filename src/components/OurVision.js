import React, {useEffect} from "react";
import {Container, Row, Col, Button, Image} from "react-bootstrap";
import Aos from "aos";

import "./../css/vision.css";
import "aos/dist/aos.css";

import circle from "./../assets/teenyicons_tick-circle-solid.svg";
import type2 from "./../assets/type_2.svg";

export default function OurVision() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div class="bbg-image">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} data-aos="fade-up">
            <h3 className="hero-h3">Our Vision</h3>
            <h1 className="hero-h1">GET THE BEST TREATMENT IN CALICUT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi est totam vero iure accusantium blanditiis, error quod voluptatem distinctio, quasi autem placeat esse nesciunt architecto eos! Accusamus, rem expedita.
            </p>
            <ul className="vision-ul">
              <li>
                <Image src={circle} alt="circle" className="socialmedia-svg"></Image> Best and timely diagnosis
              </li>
              <li>
                <Image src={circle} alt="circle" className="socialmedia-svg"></Image> Great and timely diagnosis
              </li>
              <li>
                <Image src={circle} alt="circle" className="socialmedia-svg"></Image> Experienced Professionals
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} data-aos="fade-down">
            <Image src={type2} alt="vision-image"></Image>
          </Col>
        </Row>
        <div class="session-div">
          <Button type="button" className="btn book-session-btn">
            BOOK A SESSION <i class="bi bi-arrow-right"></i>
          </Button>
        </div>
      </Container>
    </div>
  );
}