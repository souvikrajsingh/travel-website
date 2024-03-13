import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TopDestinaion from "./TopDestination.jsx";
import Tabbar from "./Tabbar.jsx";
import './explore.css';

export default function Explore() {
  return (
    <>
      <Navbar />
      <Tabbar />
      <TopDestinaion />
      <Footer />
    </>
  );
}

