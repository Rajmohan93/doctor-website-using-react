import React from "react";
import { Image, Container } from "react-bootstrap";
import contactus from "./../assets/medic_boy_2.svg";
import "./../css/contact.css";
export default function Contact() {
  return (
    <Container fluid>
      <div className="contactDisplay">
        <div class="col-md-5 my-5">
          <h3 class="contact-h3">Contact Us</h3>
          <h1 class="display-4 contact-h1">Get better care</h1>
          <br />
          <p class="lead fw-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            nesciunt labore odio sed error! Nihil magnam iste nesciunt
            laudantium dolorem quo. Quibusdam officiis voluptate magni delectus
            nihil, repudiandae commodi quas.
          </p>
        </div>
        <div>
          <Image src={contactus}></Image>
        </div>
      </div>
    </Container>
  );
}
