import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Trek (){
    return (
        <>
            <Navbar/>
            {Display()}
            <Footer/>
        </>
    );
}

function Display () {
    return (<h1>This is trek page</h1>);
}

export default Trek;