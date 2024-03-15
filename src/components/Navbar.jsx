import React from "react";
import { MdDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Buttons from "../components/Buttons.jsx";

function Navbar() {
  return (
    <div>
      <header className="bg-white fixed top-0 left-0 w-full pl-20 z-50 bg-opacity-50 backdrop-blur-lg" style={{ boxShadow: '-5px 9px 10px hsla(0,0%,78%,.25)' }}>
        <nav className="flex justify-between items-center w-[92%] mx-auto pt-3 font-montserat">
          <div>
            <span className="font-bold">
              <NavLink exact to="/" activeClassName="active-link">
                TravelHikes
              </NavLink>
            </span>
          </div>
          <div>
            <ul className="flex justify-center gap-10">
              <li>
                <NavLink
                  to="/"
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Discover
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Trips"
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Trips
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Treks"
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Treks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/BeAGuide"
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Be a Guide
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <div className='flex '>
            <FaSearch /><input className="pl-1" placeholder="Type to search" />
          </div> */}
          <div>
            <NavLink
              to="/Profile/Signin"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              <Buttons buttonName="Sign In" />
            </NavLink>

            <NavLink
              to="/Profile/Signup"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              <Buttons buttonName="Sign Up" />
            </NavLink>
            <button className="h-10">
              <MdDarkMode />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
