import React from "react";
import { Container } from "react-bootstrap";

import NavigationBar from "./components/NavigationBar";
import OurVision from "./components/OurVision";
import Features from "./components/Features";
import OurTeam from "./components/OurTeam";
import LatestNews from "./components/LatestNews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Container fluid>
        <NavigationBar />
        <OurVision />
        <Features />
        <OurTeam />
        <LatestNews />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}
