import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

import img1 from './Banners/image1.jpg';
import img2 from './Banners/image2.jpg';
import img3 from './Banners/image3.jpg';

// Component for the image carousel
export default function ImageCarousel() {
    // Array of image URLs
    const slides = [img1, img2, img3];

    return (
        <div className="relative">
            <div className="max-w-lg">
                {/* Render the carousel with specified settings */}
                <Carousel autoSlide={false} autoSlideInterval={3000} slides={slides} />
            </div>
        </div>
    );
}

// Carousel component that displays a set of images
function Carousel({
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
