import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

import "../css/OurTeam.css";

import image1 from "./../assets/image1.jpg";
import image2 from "./../assets/image2.jpg";
import image3 from "./../assets/image3.jpg";

export default function OurTeam() {
    return (
        <div className="ourteam">
            <Container>
                <h3 className="ourteam-title-1">Our Team</h3>
                <h2 className="ourteam-title-2">Meet Our People</h2>
                <Row className="ourteam-member">
                    <Col>
                        <img src={image1} alt="doctor" className="ourteam-doc-image" />
                        <h3 className="ourteam-doc-content">Dr. Mary Poonen Lukose</h3>
                        <p className="ourteam-doc-content">Gynecologist</p>
                        <p className="ourteam-doc-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis alias nulla.</p>
                        <Button variant="primary" type="button" className="ourteam-button">
                            Read more <i class="bi bi-arrow-right"></i>
                        </Button>
                    </Col>
                    <Col>
                        <img src={image2} alt="doctor" className="ourteam-doc-image" />
                        <h3 className="ourteam-doc-content">Dr. Madhusudan Gupta</h3>
                        <p className="ourteam-doc-content">Ayurvedic Medicine</p>
                        <p className="ourteam-doc-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis alias nulla.</p>
                        <Button variant="primary" type="button" className="ourteam-button">
                            Read more <i class="bi bi-arrow-right"></i>
                        </Button>
                    </Col>
                    <Col>
                        <img src={image3} alt="doctor" className="ourteam-doc-image" />
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