import React from "react";

import "./App.css";

import NavigationBar from "./components/NavigationBar";
import OurVision from "./components/OurVision";
import Features from "./components/Features";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <NavigationBar />
      <OurVision />
      <Features />
      <OurTeam />
      <Contact />
      <Footer />
    </div>
  );
}