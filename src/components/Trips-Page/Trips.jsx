import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import './trips.css';
import SearchBox from "../Discover-Page/SearchBox.jsx";

import vidFile from './opening-video/hot-air-ballon.mp4';

export default function Explore() {
  return (
    <>
      <Navbar />
      <OpeningVideo />
      <Footer />
    </>
  );
}

function OpeningVideo(){
  return (
    <div className="vid-container">
      <video autoPlay muted loop className="video-background">
        <source src={vidFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="search-bar">
        {/* <SearchBox /> */}
      </div>
      <div className="overlay"></div>
    </div>
  );
}
