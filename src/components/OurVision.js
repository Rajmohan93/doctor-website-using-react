import React from "react";
import { Image } from "react-bootstrap";

import "./../css/vision.css";
import circle from "./../assets/teenyicons_tick-circle-solid.svg";

export default function OurVision() {
  return (
    <div class="bbg-image">
      <div class="position-relative overflow-hidden">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <span>Our Vision</span>
          <h1 class="display-4 hero-h1">GET THE BEST</h1>
          <h1 class="display-4 hero-h1">TREATMENT IN CALICUT</h1>
          <p class="lead fw-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            nesciunt labore odio sed error! Nihil magnam iste nesciunt
            laudantium dolorem quo. Quibusdam officiis voluptate magni delectus
            nihil, repudiandae commodi quas.
          </p>
          <div className="my-flex">
            <div className="inner-row-flex">
              <Image
                src={circle}
                alt="circle"
                className="socialmedia-svg"
              ></Image>
              <span>Best and timely diagnosis</span>
            </div>
            <div className="inner-row-flex">
              <Image
                src={circle}
                alt="circle"
                className="socialmedia-svg"
              ></Image>
              <span>Great and timely diagnosis</span>
            </div>

            <div className="inner-row-flex">
              <Image
                src={circle}
                alt="circle"
                className="socialmedia-svg"
              ></Image>
              <span>Experienced Professionals</span>
            </div>
          </div>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>
  );
}