import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

import "./../css/navbar.css";

import logo from "./../assets/Logo.svg";
import twitter from "./../assets/twitter.svg";
import youtube from "./../assets/youtube.svg";
import instagram from "./../assets/instagram.svg";
import facebook from "./../assets/facebook.svg";

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Image className="logo-image" src={logo}></Image>Dr Muhammed's{" "}
            <span>consulting</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll >
              <Nav.Link href="#">Our Vision</Nav.Link>
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">Our Team</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex socialmedia-div">
            <Image src={twitter} alt="twitter" className="socialmedia-svg"></Image>
            <Image src={instagram} alt="twitter" className="socialmedia-svg"></Image>
            <Image src={facebook} alt="twitter" className="socialmedia-svg"></Image>
            <Image src={youtube} alt="twitter" className="socialmedia-svg"></Image>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}