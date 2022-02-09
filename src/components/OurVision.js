import React, {useEffect} from "react";
import {Container, Row, Col, Button, Image} from "react-bootstrap";
import Aos from "aos";

import "./../css/vision.css";
import "aos/dist/aos.css";

import circle from "./../assets/teenyicons_tick-circle-solid.svg";

export default function OurVision() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div class="bbg-image">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} data-aos="zoom-in-up">
            <div class="position-relative overflow-hidden">
              <h3 class="hero-h3">Our Vision</h3>
              <h1 class="display-4 hero-h1">GET THE BEST TREATMENT IN CALICUT</h1>
              <p class="lead fw-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi est totam vero iure accusantium blanditiis, error quod voluptatem distinctio, quasi autem placeat esse nesciunt architecto eos! Accusamus, rem expedita.
              </p>
              <div className="my-flex">
                <div className="inner-row-flex">
                  <Image src={circle} alt="circle" className="socialmedia-svg"></Image><span>Best and timely diagnosis</span>
                </div>
                <div className="inner-row-flex">
                  <Image src={circle} alt="circle" className="socialmedia-svg"></Image><span>Great and timely diagnosis</span>
                </div>
                <div className="inner-row-flex">
                  <Image src={circle} alt="circle" className="socialmedia-svg"></Image><span>Experienced Professionals</span>
                </div>
              </div>
              <div class="session-div">
                <Button type="button" className="btn book-session-btn">
                  BOOK A SESSION <i class="bi bi-arrow-right"></i>
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} data-aos="zoom-in-down">
            Blackwins Studio
          </Col>
        </Row>
      </Container>
    </div>
  );
}