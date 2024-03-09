import React, { Component } from "react";
import Slider from "react-slick";
import './cardslick.css';

function CardSlick() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="card-slick">
                    <img src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <h3>1</h3>
                </div>
                <div className="card-slick">
                    <img src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <h3>2</h3>
                </div>
                <div className="card-slick">
                    <img src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <h3>3</h3>
                </div>
                <div className="card-slick">
                    <img src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <h3>4</h3>
                </div>
                <div className="card-slick">
                    <img src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <h3>5</h3>
                </div>
                <div className="card-slick">
                    <img src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
}

export default CardSlick;
