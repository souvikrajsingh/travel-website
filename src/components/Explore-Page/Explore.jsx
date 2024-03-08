import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import TopDestinaion from "./TopDestination.jsx";
import Tabbar from "./Tabbar.jsx";
import './explore.css';
import bgvid from './BGvideo1.mp4';

function Play() {
  return (
    <div className="play-section">
      <div className="overlay"></div>
      <video src={bgvid} autoPlay loop muted />
      
      <div className="content">
        <h1>Welcome</h1>
        <p>to my site</p>
      </div>
      
    </div>
  );
}

export default function Explore() {
  return (
    <>
      <Navbar />
      <Tabbar />
      {Play()}
      <TopDestinaion />
      <Footer />
    </>
  );
}

