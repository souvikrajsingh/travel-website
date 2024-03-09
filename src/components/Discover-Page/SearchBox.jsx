import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './searchBox.css';
import openingImage from './photos/opening-poster.png';

export default function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const handleFocus = (event) => {
            $(event.target).parent().addClass('focus');
        };

        const handleBlur = (event) => {
            $(event.target).parent().removeClass('focus');
        };

        $('.search-input').on('focus', handleFocus).on('blur', handleBlur);

        return () => {
            $('.search-input').off('focus', handleFocus).off('blur', handleBlur);
        };
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Add your search logic here (e.g., fetching data based on the search term)
        console.log('Search term submitted:', searchTerm);
    };

    return (
        <>
            <div className="where">
                <h1>Where to?</h1>
            </div>

            <form className="search-form" onSubmit={handleSearchSubmit}>
                <input
                    type="search"
                    value={searchTerm}
                    placeholder="Places to go, things to do, tour packages..."
                    className="search-input"
                    onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">
                    <svg className="submit-button">
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#search"></use>
                    </svg>
                </button>

                <button type="submit" className="search-now">
                    <h2 className="search-text">search</h2>
                </button>
            </form>

            <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" display="none">
                <symbol id="search" viewBox="0 0 32 32">
                    <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
                </symbol>
            </svg>

            <div>
                <img className="openingPic" src={openingImage} alt='opening photo'></img>
            </div>
        </>
    );
}
