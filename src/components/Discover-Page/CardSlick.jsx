import React from "react";
import Slider from "react-slick";
import './cardslick.css';
import CardEntry from "./CardEntry";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./Props/Data";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#7a7a7a45",
                right: "-40px",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#7a7a7a45",
                left: "-40px",
                borderRadius: "50%",
            }}
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
            <p>Find yourself awestruck with this year's most popular destinations</p>

            <Slider {...settings}>

                {/* Map through the data from the Data file and create entries */}
                {Data.map((entry) => (
                    <CardEntry
                        key={entry.id}
                        index={entry.index}
                        img1={entry.img1}
                        img2={entry.img2}
                        img3={entry.img3}
                        duration={entry.duration}
                        location={entry.location}
                        title={entry.title}
                        review={entry.review}
                        price={entry.price}
                    />
                ))}

            </Slider>
        </div>
    );
}

export default CardSlick;
