import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import './trips.css';
import Features from './Features.jsx';
import Trending from './Trending-trips/Trending.jsx';
import Weekend from './Weekend-trips/Weekend.jsx';
import Adventure from './Adventure-activity/Adventure.jsx';

import vidFile from './AA-opening-video/bg.webm';

export default function Explore() {
  return (
    <>
      <Navbar />
      <OpeningVideo />
      <Features />
      <Trending />
      <Weekend />
      <Adventure />
      <Footer />
    </>
  );
}

function OpeningVideo() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleFocus = (event) => {
      $(event.target).parent().addClass('focus');
    };

    const handleBlur = (event) => {
      $(event.target).parent().removeClass('focus');
    };

    $('.search-input').on('focus', handleFocus).on('blur', handleBlur);

    return () => {
      $('.search-input').off('focus', handleFocus).off('blur', handleBlur);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here (e.g., fetching data based on the search term)
    console.log('Search term submitted:', searchTerm);
  };

  return (
    <div className="main-container">

      <div className="bgvideo-container">
        <video autoPlay muted loop playsInline className="video-background">
          <source src={vidFile} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay"></div>
      </div>

      <div className="content">
        <h2 className="head-text">TravelHikes</h2>
        <p className="para-text">takes you anywhere..</p>

        <div className="container-search-bar" onSubmit={handleSearchSubmit}>
          <input
            type="search"
            value={searchTerm}
            placeholder="Where to..?"
            className="drop-input"
            onChange={handleSearchChange}
          />
        </div>
      </div>

    </div>
  );
}
