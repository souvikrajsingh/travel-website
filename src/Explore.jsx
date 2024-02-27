import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./Explore.css";
import "./explore.js";


export default function Explore() {
    return (
        <div>
            <Navbar />
            <section id="top">
                <img src="https://aryan-tayal.github.io/Mountains-Parallax/bg.jpg" id="bg" />
                <h2 id="text">Mountains</h2>
                <img src="https://aryan-tayal.github.io/Mountains-Parallax/man.png" id="man" />
                <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_1.png" id="clouds_1" />
                <img src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_2.png" id="clouds_2" />
                <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_left.png" id="mountain_left" />
                <img src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_right.png" id="mountain_right" />
            </section>
            <section id="sec">
                <h2>Welcome to the Mountains</h2>
                <p>Hii, My name is Pancham. Today you are going to explore with me.</p>
            </section>
            <Footer />
        </div>
    );
}

