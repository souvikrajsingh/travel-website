import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Ycommon.css';
import WEntry from "./WEntry";
import Wdata from "./Wdata";

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

export default function Weekend() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };

    return (
        <div className="slider-container">
            <h1>Weekend Trips ✨</h1>
            <p>Find yourself awestruck with these weekend packages</p>

            <Slider {...settings}>

                {/* Map through the data from the Data file and create entries */}
                {Wdata.map((entry, index) => (
                    <WEntry
                        key={index}
                        index={index}
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
