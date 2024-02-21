import React from "react";
import SigninCard from "./components/SigninCard";
import Navbar from "./components/Navbar";

var isLoggedIn = false;

function SigninPage() {
  return (
    <div>
      <Navbar />
      <div>

        {/* Ternary Operator */}
        {isLoggedIn ? <h1>Happy Exploring !</h1> : <SigninCard />}

      </div>
    </div>
  );
}

export default SigninPage;
