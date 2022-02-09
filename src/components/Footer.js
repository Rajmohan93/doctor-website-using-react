import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./../css/footer.css";

export default function Footer() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#">Our Vision</Nav.Link>
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">Our Team</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="footerDisplay">
        <a href="/home">Copyright &copy; Metro Hostpital 2022</a>
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