import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './Treks.css';
import ImageCard from "./ImageCard"


function Trek() {
    return (
        <>
            <Navbar />
            {Display()}
            
            <ImageCard />
            <Footer />
        </>
    );
}

function Display() {

    useEffect(() => {
        const mountainLeft = document.querySelector('#mountain_left');
        const mountainRight = document.querySelector('#mountain_right');
        const cloud1 = document.querySelector('#clouds_1');
        const cloud2 = document.querySelector('#clouds_2');
        const text = document.querySelector('#text');
        const man = document.querySelector('#man');

        const handleScroll = () => {
            let value = window.scrollY;
            mountainLeft.style.left = `-${value / 0.7}px`;
            cloud2.style.left = `-${value * 2}px`;
            mountainRight.style.left = `${value / 0.7}px`;
            cloud1.style.left = `${value * 2}px`;
            text.style.bottom = `-${value}px`;
            man.style.height = `${window.innerHeight - value}px`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup the event listener when the component is unmounted
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div>
                <body className="trek-body">
                    <section className="top">
                        <img src="https://aryan-tayal.github.io/Mountains-Parallax/bg.jpg" id="bg" />
                        <h2 id="text">Mountains</h2>
                        <img src="https://aryan-tayal.github.io/Mountains-Parallax/man.png" id="man" />
                        <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_1.png" id="clouds_1" />
                        <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_2.png" id="clouds_2" />
                        <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_left.png" id="mountain_left" />
                        <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_right.png" id="mountain_right" />
                    </section>
                    {/* <div className="sec">
                        <h2>Welcome to the Mountains</h2>
                        <p>let's explore together!</p>
                    </div> */}
                </body>
            </div>,
            <div className="sec">
                <h2>Welcome to the Mountains</h2>
                <p>let's explore together!</p>
            </div>
        </>

    );
}

export default Trek;
