import React from "react";
import { MdDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Buttons from "../components/Buttons.jsx";

function Navbar() {
  return (
    <div>
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto pt-4 font-montserat">
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
                  to="/Explore"
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Explore
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
