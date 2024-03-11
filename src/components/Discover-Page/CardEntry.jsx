import React, { useState, useEffect } from "react";
import './cardslick.css';

// Importing react-feather icons
import { ChevronLeft, ChevronRight } from "react-feather";

// Import Data.js here
import Data from "./Props/Data";


function ImageCarousel({
    autoSlide = false,
    autoSlideInterval = 3000,
    slides,
}) {
    // State to keep track of the current slide index
    const [currSlideIndex, setCurrSlideIndex] = useState(0);

    // Function to navigate to the previous slide
    const goToPrevSlide = () =>
        setCurrSlideIndex((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    // Function to navigate to the next slide
    const goToNextSlide = () =>
        setCurrSlideIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    // UseEffect to handle auto-slide functionality
    useEffect(() => {
        if (!autoSlide) return;

        // Set up an interval to move to the next slide at specified intervals
        const slideInterval = setInterval(goToNextSlide, autoSlideInterval);

        // Clear the interval when the component is unmounted
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, slides.length]);

    return (
        <div className="overflow-hidden relative">
            {/* Display the slides with a horizontal transition effect */}
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currSlideIndex * 100}%)` }}
            >
                {/* Map through the slides and render each image */}
                {slides.map((img, index) => (
                    <img key={index} src={img} alt={`slide-${index + 1}`} />
                ))}
            </div>

            {/* Navigation buttons for moving to the previous and next slides */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={goToPrevSlide}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-all"
                >
                    {/* ChevronLeft icon for the previous slide */}
                    <ChevronLeft size={15} />
                </button>
                <button
                    onClick={goToNextSlide}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-all"
                >
                    {/* ChevronRight icon for the next slide */}
                    <ChevronRight size={15} />
                </button>
            </div>

            {/* Bottom navigation dots indicating the current slide */}
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {/* Map through slides to render navigation dots */}
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`
                                transition-all w-1 h-1 bg-white rounded-full
                                ${currSlideIndex === i ? "p-0" : "bg-opacity-50"}
                            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}


// CardEntry component
export default function CardEntry(props) {

    // Use the first set of images from the current object in Data
    const data = Data[props.index];

    // Check if the data is available before using it
    if (!data) {
        console.error(`Data not found for index ${props.index}`);
        return null; // or handle the error accordingly
    }

    const slides = [data.img1, data.img2, data.img3];

    return (
        <div className="card-slick">
            <div className="imgCarousel">
                <ImageCarousel slides={slides} />
            </div>

            <div className="details">
                <div className="head-sec">
                    <div className="duration">{data.duration}</div>
                    <div className="location">{data.location}</div>
                </div>

                <div className="title">{data.title}</div>
                <div className="review">{data.review}</div>

                <div className="foot-sec">
                    <div className="p-text">starting from</div>
                    <div className="price">{data.price}</div>
                </div>
            </div>
        </div>
    );
}
