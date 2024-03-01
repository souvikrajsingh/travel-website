import React from "react";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons.jsx";

function Navbar() {
  return (
    <div>
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto pt-4 font-montserat">
          <div>
            <span className="font-bold">
              <a href="http://localhost:5173/">TravelHike</a>
            </span>
          </div>
          <div>
            <ul className="flex justify-center gap-10">
              <li>
                <Link to="/">Discover</Link>
              </li>
              <li>
                <Link to="/Explore">Explore</Link>
              </li>
              <li>
                <Link to="/Treks">Treks</Link>
              </li>
              <li>
                <Link to="/BeAGuide">Be a Guide</Link>
              </li>
            </ul>
          </div>
          {/* <div className='flex '>
            <FaSearch /><input className="pl-1" placeholder="Type to search" />
          </div> */}
          <div>
            <Link to="/Profile/Sign">
              <Buttons buttonName="Sign In" />
            </Link>

            <Link to="/Profile/Signup" className="px-2">
              <Buttons buttonName="Sign Up" />
            </Link>
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
