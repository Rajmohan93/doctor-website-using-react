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
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Image className="logo-image" src={logo}></Image>Dr Muhammed's Consulting
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
            <a href="https://twitter.com/"><Image src={twitter} alt="twitter" className="socialmedia-svg"></Image></a>
            <a href="https://www.instagram.com/"><Image src={instagram} alt="twitter" className="socialmedia-svg"></Image></a>
            <a href="https://www.facebook.com/"><Image src={facebook} alt="twitter" className="socialmedia-svg"></Image></a>
            <a href="https://www.youtube.com/"><Image src={youtube} alt="twitter" className="socialmedia-svg"></Image></a>
          </div>
        </Container>
      </Navbar> */}


      <Navbar collapseOnSelect expand="md" className="Naviagation-Bar">
        <Container>
          <Navbar.Brand href="#home">
            <Image className="logo-image" src={logo}></Image>Dr Muhammed's Consulting
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="naviagtion-links">
            <Nav className="me-auto">
              <Nav.Link href="#ourvision">
                Our Vision
              </Nav.Link>

              <Nav.Link href="#features">
                Features
              </Nav.Link>

              <Nav.Link href="#ourteam">
                Our Team
              </Nav.Link>

              <Nav.Link href="#contact">
                Contacts
              </Nav.Link>
            </Nav>

            <Nav className="d-flex socialmedia-div">
              <Nav.Link>
                <a href="https://twitter.com/">
                  <Image src={twitter} alt="twitter" className="socialmedia-svg"></Image>
                </a>
              </Nav.Link>

              <Nav.Link>
                <a href="https://www.instagram.com/">
                  <Image src={instagram} alt="twitter" className="socialmedia-svg"></Image>
                </a>
              </Nav.Link>

              <Nav.Link>
                <a href="https://www.facebook.com/">
                  <Image src={facebook} alt="twitter" className="socialmedia-svg"></Image>
                </a>
              </Nav.Link>

              <Nav.Link>
                <a href="https://www.youtube.com/">
                  <Image src={youtube} alt="twitter" className="socialmedia-svg"></Image>
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}