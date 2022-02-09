import React, {useEffect} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import Aos from "aos";

import "../css/OurTeam.css";
import "aos/dist/aos.css";

import image1 from "./../assets/image1.jpg";
import image2 from "./../assets/image2.jpg";
import image3 from "./../assets/image3.jpg";
import image4 from "./../assets/image4.jpg";

export default function OurTeam() {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="ourteam">
            <Container>
                <h3 className="ourteam-title-1">Our Team</h3>
                <h2 className="ourteam-title-2">Meet Our People</h2>
                <Row className="ourteam-member">
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="my-3" data-aos="flip-left">
                        <img src={image1} alt="doctor" className="ourteam-doc-image" />
                        <h3 className="ourteam-doc-content">Dr. Mary Poonen Lukose</h3>
                        <p className="ourteam-doc-content">Gynecologist</p>
                        <p className="ourteam-doc-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis alias nulla.</p>
                        <Button variant="primary" type="button" className="ourteam-button">
                            Read more <i class="bi bi-arrow-right"></i>
                        </Button>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="my-3" data-aos="flip-right">
                        <img src={image2} alt="doctor" className="ourteam-doc-image" />
                        <h3 className="ourteam-doc-content">Dr. Madhusudan Gupta</h3>
                        <p className="ourteam-doc-content">Ayurvedic Medicine</p>
                        <p className="ourteam-doc-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis alias nulla.</p>
                        <Button variant="primary" type="button" className="ourteam-button">
                            Read more <i class="bi bi-arrow-right"></i>
                        </Button>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="my-3" data-aos="flip-left">
                        <img src={image4} alt="doctor" className="ourteam-doc-image" />
                        <h3 className="ourteam-doc-content">Dr. Priyadarshi Ranjan</h3>
                        <p className="ourteam-doc-content">Urologist</p>
                        <p className="ourteam-doc-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis alias nulla.</p>
                        <Button variant="primary" type="button" className="ourteam-button">
                            Read more <i class="bi bi-arrow-right"></i>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}