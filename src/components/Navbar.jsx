import React from 'react'
import { SiAdobexd } from "react-icons/si";
import { MdDarkMode } from "react-icons/md";


function Navbar() {
  return (
    <div>
        <header className='bg-white'>
            <nav className='flex justify-between items-center w-[92%] mx-auto pt-4 font-montserat'>
                <div>
                    <span className = "font-bold"><a href="http://localhost:5173/">TravelHike</a></span>
                </div>
                <div>
                    <ul className='flex justify-center gap-10'>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Treks</a></li>
                        <li><a href="#">Be a Guide</a></li>
                    </ul>
                </div>
                {/* <div className = 'flex '>
                <FaSearch/><input className="pl-1"placeholder="Type to search"/>
                </div> */}
                <div>                    
                    <button className='h-10'><MdDarkMode/></button>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar;