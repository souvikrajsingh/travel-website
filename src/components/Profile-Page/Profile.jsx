import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";


function Profile() {
    return (
        <>
            <Navbar />
            {Display()}
            <Footer />
        </>
    );
}

function Display() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">

            <Link to="/Profile/Signin">
                <button
                    type="button"
                    className="rounded-full bg-black px-3 py-2 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Sign in
                </button>
            </Link>

            <Link to="/Profile/Signup">
                <button
                    type="button"
                    className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Sign up
                </button>
            </Link>

        </div>
    );
}


export default Profile;
