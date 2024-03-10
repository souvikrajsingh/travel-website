import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './cardslick.css';
import ImageCarousel from "./ImageCarousel";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next-arrow`}
            style={style}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow`}
            style={style}
            onClick={onClick}
        />
    );
}

function CardSlick() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container">
            <h1>This year's most popular ✨</h1>
            <p>Find yourself awestruct with this year's most popular destinations</p>

            <Slider {...settings}>

                <div className="card-slick">
                    <div className="imgCarousel">
                        <ImageCarousel />
                    </div>

                    <div className="details">
                        <div className="head-sec">
                            <div className="duration">⏳7 days & 6 nights</div>
                            <div className="location">🪧Japan</div>
                        </div>

                        <div className="title">Japan's Onsen Paradise</div>
                        <div className="review">⭐⭐⭐⭐ (599)</div>

                        <div className="foot-sec">
                            <div className="p-text">starting from</div>
                            <div className="price"> INR 1,000,00</div>
                        </div>
                    </div>
                </div>

                <div className="card-slick">
                    <div className="imgCarousel">
                        <ImageCarousel />
                    </div>

                    <div className="details">
                        <div className="head-sec">
                            <div className="duration">⏳7 days & 6 nights</div>
                            <div className="location">🪧Japan</div>
                        </div>

                        <div className="title">Japan's Onsen Paradise</div>
                        <div className="review">⭐⭐⭐⭐ (599)</div>

                        <div className="foot-sec">
                            <div className="p-text">starting from</div>
                            <div className="price"> INR 1,000,00</div>
                        </div>
                    </div>
                </div>

                <div className="card-slick">
                    <div className="imgCarousel">
                        <ImageCarousel />
                    </div>

                    <div className="details">
                        <div className="head-sec">
                            <div className="duration">⏳7 days & 6 nights</div>
                            <div className="location">🪧Japan</div>
                        </div>

                        <div className="title">Japan's Onsen Paradise</div>
                        <div className="review">⭐⭐⭐⭐ (599)</div>

                        <div className="foot-sec">
                            <div className="p-text">starting from</div>
                            <div className="price"> INR 1,000,00</div>
                        </div>
                    </div>
                </div>

                <div className="card-slick">
                    <div className="imgCarousel">
                        <ImageCarousel />
                    </div>

                    <div className="details">
                        <div className="head-sec">
                            <div className="duration">⏳7 days & 6 nights</div>
                            <div className="location">🪧Japan</div>
                        </div>

                        <div className="title">Japan's Onsen Paradise</div>
                        <div className="review">⭐⭐⭐⭐ (599)</div>

                        <div className="foot-sec">
                            <div className="p-text">starting from</div>
                            <div className="price"> INR 1,000,00</div>
                        </div>
                    </div>
                </div>

                <div className="card-slick">
                    <div className="imgCarousel">
                        <ImageCarousel />
                    </div>

                    <div className="details">
                        <div className="head-sec">
                            <div className="duration">⏳7 days & 6 nights</div>
                            <div className="location">🪧Japan</div>
                        </div>

                        <div className="title">Japan's Onsen Paradise</div>
                        <div className="review">⭐⭐⭐⭐ (599)</div>

                        <div className="foot-sec">
                            <div className="p-text">starting from</div>
                            <div className="price"> INR 1,000,00</div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default CardSlick;
