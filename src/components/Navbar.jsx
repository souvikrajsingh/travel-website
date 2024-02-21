import React from 'react';
import { SiAdobexd } from 'react-icons/si';
import { MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <header className='bg-white'>
                <nav className='flex justify-between items-center w-[92%] mx-auto pt-4 font-montserat'>
                    <div>
                        <span className="font-bold"><a href="http://localhost:5173/">TravelHike</a></span>
                    </div>
                    <div>
                        <ul className='flex justify-center gap-10'>
                            <li><Link to='/'>Discover</Link></li>
                            <li><Link to='/Explore'>Explore</Link></li>
                            <li><Link to='/Treks'>Treks</Link></li>
                            <li><Link to='/BeAGuide'>Be a Guide</Link></li>
                            <li><Link to='/Signin'>Sign in</Link></li>
                        </ul>
                    </div>
                    {/* <div className='flex '>
            <FaSearch /><input className="pl-1" placeholder="Type to search" />
          </div> */}
                    <div>
                        <button className='h-10'><MdDarkMode /></button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;