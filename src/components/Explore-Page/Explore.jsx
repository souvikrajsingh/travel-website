import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import Opening from "./Opening.jsx";
import TopDestinaion from "./TopDestination.jsx";


export default function Explore() {
    return (
        <>
            <Navbar />
            <TopDestinaion />
            <Opening />
            <Footer />
        </>
    );
}

