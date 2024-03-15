import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Animation from "./components/Discover-Page/Animation";
import SearchBox from "./components/Discover-Page/SearchBox";
import CardSlick from "./components/Discover-Page/Popular-this-year/CardSlick";
import Mountains from "./components/Discover-Page/Mountain-packages/Mountains";
import Beach from "./components/Discover-Page/BestBeaches/Beach";
import Inational from "./components/Discover-Page/International/Inational";
import Ptrek from "./components/Discover-Page/Popular-treks/Ptrek";
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
      <OfferBanner />
      <Inational />
      <LocalVideo />
      <Ptrek />
      <Poster2 />
      <WhyChooseUs />
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

function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Affordable Adventure</h3>
            <p>We believe that everyone deserves the chance to explore the great outdoors without breaking the bank.</p>
          </div>
          <div className="feature-item">
            <h3>Tailored Experiences</h3>
            <p>No two adventurers are alike, and neither are our trips. Whether you're a seasoned hiker or a first-time trekker, we offer a diverse range of experiences curated to match your interests, fitness levels, and preferences.</p>
          </div>
          <div className="feature-item">
            <h3>Expert Guides</h3>
            <p>Safety and expertise are our top priorities. Our experienced guides are well-versed in local terrain, culture, and safety protocols, ensuring a smooth and enriching journey every step of the way.</p>
          </div>
          <div className="feature-item">
            <h3>Sustainable Tourism</h3>
            <p>We are dedicated to preserving the natural beauty and cultural heritage of the destinations we visit. By partnering with local communities and adhering to sustainable tourism practices, we ensure that our adventures leave a positive impact on both the environment and local economies.</p>
          </div>
          <div className="feature-item">
            <h3>Hassle-Free Booking</h3>
            <p>Planning your adventure should be as exciting as the journey itself. Our user-friendly website and dedicated customer support team make booking your next trek or hike a breeze, allowing you to focus on the thrill of the adventure ahead.</p>
          </div>
          <div className="feature-item">
            <h3>Memorable Experiences Guaranteed</h3>
            <p>From breathtaking landscapes to unforgettable encounters, we promise to deliver experiences that will stay with you long after the journey ends. Join us on an adventure of a lifetime and discover the world in a whole new way.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default App;
