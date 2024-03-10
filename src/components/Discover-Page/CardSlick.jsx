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
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
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
                    <div>
                        <h1>titles</h1>
                        <p>description</p>
                    </div>
                </div>
                <div className="card-slick">
                    <div className="imgCarousel">
                        <ImageCarousel />
                    </div>
                    <div>

                    </div>
                </div>
                <div className="card-slick">
                    <img src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <div>

                    </div>
                </div>
                <div className="card-slick">
                    <img src="https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <div>

                    </div>
                </div>
                <div className="card-slick">
                    <img src="https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <div>

                    </div>
                </div>
                <div className="card-slick">
                    <img src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <div>

                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default CardSlick;
