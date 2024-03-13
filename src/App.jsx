import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Animation from "./components/Discover-Page/Animation";
import SearchBox from "./components/Discover-Page/SearchBox";
import CardSlick from "./components/Discover-Page/First-slide-section/CardSlick";
import Mountains from "./components/Discover-Page/Mountain-packages/Mountains";
import Beach from "./components/Discover-Page/BestBeaches/Beach";
import Inational from "./components/Discover-Page/International/Inational";
import Ptrek from "./components/Discover-Page/Popular-treks/Ptrek";
import Review from './components/Discover-Page/Reviews/Review';
import './index.css';

import offer1 from './components/Discover-Page/Banners/offerPoster1.png';
import videoFile from './components/Discover-Page/Banners/PromoVideo.mp4';
import posterlast from './components/Discover-Page/Banners/offerPoster2.png';

function App() {
  return (
    <>
      <Navbar />
      <Animation />
      <SearchBox />
      <CardSlick />
      <Mountains />
      <Beach />
      {OfferBanner()}
      <Inational />
      <LocalVideo />
      <Ptrek /> 
      <Poster2 />
      <Review />
      <Footer />
    </>
  );
}

function OfferBanner() {
  return (
    <div className="offer-container">
      <img src={offer1} alt="offer poster1" className="offer-image1" />

      <button className="E-button">
        <p className="E-text">Explore Now</p>
      </button>

    </div>
  );
}

function LocalVideo() {
  return (
    <div className="video-container">
      <video controls autoPlay muted loop>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function Poster2() {
  return (
    <div className="poster-container">
      <img src={posterlast} alt="offer poster2" className="last-poster" />

      <button className="B-button">
        <p className="B-text">Book Now</p>
      </button>

    </div>
  );
}


export default App;
