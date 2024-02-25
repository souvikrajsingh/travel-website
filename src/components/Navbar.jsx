import React from 'react';
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
                        </ul>
                    </div>
                    {/* <div className='flex '>
            <FaSearch /><input className="pl-1" placeholder="Type to search" />
          </div> */}
                    <div>
                    <Link to="/Profile/Signin">
                <button
                    type="button"
                    className="rounded-full bg-black px-3 py-2 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Sign in
                </button>
            </Link>

            <Link to="/Profile/Signup" className='px-2'>
                <button
                    type="button"
                    className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Sign up
                </button>
            </Link>
                        <button className='h-10'><MdDarkMode /></button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;