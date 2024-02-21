import React from "react";
import SigninCard from "./components/SigninCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

var isLoggedIn = false;

function display (){
  return (
    <>
      <Navbar />
      <SigninCard />
      <Footer />
    </>
  )
}

function SigninPage() {
  return (
    <>
      {/* Ternary Operator */}
      {isLoggedIn ? <h1>Happy Exploring !</h1> : display()}
    </>
  );
}

export default SigninPage;
