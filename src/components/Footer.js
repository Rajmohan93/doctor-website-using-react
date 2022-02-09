import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import "./../css/footer.css";
export default function Footer() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Our Vision</Nav.Link>
              <Nav.Link href="#action2">Features</Nav.Link>
              <Nav.Link href="#action3">Our Team</Nav.Link>
              <Nav.Link href="#action4">Latest News</Nav.Link>
              <Nav.Link href="#action5">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="footerDisplay">
        <a>Copyright &copy; Metro Hostpital 2022</a>
        <p class="gray-color">
          Powered by{" "}
          <a class="admin-link" href="https://blackwinsstudio.com/">
            Blackwins-Tech
          </a>
        </p>
      </div>
    </div>
  );
}
