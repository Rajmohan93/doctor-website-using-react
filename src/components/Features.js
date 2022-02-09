import React, {useEffect} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Aos from "aos";

import "aos/dist/aos.css";
import "./../css/Features.css";

import robotic from "./../assets/roboticsurgery.jpg";
import mapping from "./../assets/3dmapping.jpg";
import aisurgery from "./../assets/aisurgery.jpg";
import humanheart from "./../assets/printing-human-heart.jpg";

export default function Features() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className="features">
      <Container>
        <h3 className="features-title-1">Features</h3>
        <h2 className="features-title-2">state of the art treatment</h2>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3} data-aos="fade-up">
            <Card>
              <Card.Img src={robotic} alt="Robotic Surgery" />
              <Card.Body>
                <Card.Title>Robotic Surgery</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3} data-aos="fade-down">
            <Card>
              <Card.Img src={mapping} alt="3D Mapping" />
              <Card.Body>
                <Card.Title>3D Mapping</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3} data-aos="fade-up">
            <Card>
              <Card.Img src={humanheart} alt="3D Printed Organs" />
              <Card.Body>
                <Card.Title>3D Printed Organs</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3} data-aos="fade-down">
            <Card>
              <Card.Img src={aisurgery} alt="AI Surgery" />
              <Card.Body>
                <Card.Title>AI Surgery</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 12}} sm={{span: 12}} md={{span: 4, offset: 2}} lg={{span: 2, offset: 5}} xl={{span: 2, offset: 5}} xxl={{span: 2, offset: 5}}>
            <Button variant="primary" type="button" className="features-button">
              read more <i class="bi bi-arrow-right"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}