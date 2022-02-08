import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "./../css/Features.css";
import robotic from "./../assets/roboticsurgery.jpg";
import mapping from "./../assets/3dmapping.jpg";
import aisurgery from "./../assets/aisurgery.jpg";
import humanheart from "./../assets/printing-human-heart.jpg";
export default function Features() {
  return (
    <div className="features">
      <Container>
        <h2 className="features-title-2">state of the art treatment</h2>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={robotic} alt="Robotic Surgery" />
              <Card.Body>
                <Card.Title>Robotic Surgery</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={mapping} alt="3D Mapping" />
              <Card.Body>
                <Card.Title>3D Mapping</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={aisurgery} alt="3D Printed Organs" />
              <Card.Body>
                <Card.Title>3D Printed Organs</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={humanheart} alt="AI Surgery" />
              <Card.Body>
                <Card.Title>AI Surgery</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button variant="primary" type="button" className="features-button">
          read more <i class="bi bi-arrow-right"></i>
        </Button>
      </Container>
    </div>
  );
}
