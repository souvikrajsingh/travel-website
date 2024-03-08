import React, { useEffect } from 'react';
import $ from 'jquery';
import './searchBox.css';

export default function SearchBox() {
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

    return (
        <>
            <div className="where">
                <h1>Where to?</h1>
            </div>

            <form class="search-form">
                <input type="search" value="" placeholder="Places to go, things to do, tour packages..." class="search-input"></input>
                <button type="submit" class="search-button">
                    <svg class="submit-button">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
                    </svg>
                </button>
                <div class="search-option"></div>
            </form>

            <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" display="none">
                <symbol id="search" viewBox="0 0 32 32">
                    <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
                </symbol>
            </svg>
        </>
    );
}
