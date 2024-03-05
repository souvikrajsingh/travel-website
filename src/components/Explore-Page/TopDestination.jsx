import React, { useEffect } from "react";
import Splitting from 'splitting'; 
import './topdestination.css';

export default function TopDestination() {
    useEffect(() => {
        Splitting();
        setTimeout(() => {
            document.querySelector(".d-card").focus();
        }, 1500);
    }, []);

    return (
        <div>
            <body className="dBody">
                <h1>Top Destinations<hr></hr></h1>
                <main>

                    <div className="d-card" tabIndex="0">
                        <img src="https://images.pexels.com/photos/3574440/pexels-photo-3574440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="himachal pradesh" />
                        <div className="Dtext">
                            <h2 data-splitting="">Himachal</h2>
                            <p data-splitting="">Enchanting Himalayan landscapes, from the serene valleys to snow-capped peaks, offering a breathtaking blend of nature's wonders.</p>
                        </div>
                    </div>
                    <div className="d-card" tabIndex="0">
                        <img src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Goa" />
                        <div className="Dtext">
                            <h2 data-splitting="">Goa</h2>
                            <p data-splitting="">Endless stretches of sun-kissed beaches, vibrant markets, and the captivating blend of Indian and Portuguese architecture, all set against the backdrop of the Arabian Sea.</p>
                        </div>
                    </div>
                    <div className="d-card" tabIndex="0">
                        <img src="https://images.pexels.com/photos/6738359/pexels-photo-6738359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kashmir" />
                        <div className="Dtext">
                            <h2 data-splitting="">Kashmir</h2>
                            <p data-splitting="">A mesmerizing tapestry of Dal Lake, surrounded by majestic mountains, capturing the essence of unparalleled beauty and tranquility.</p>
                        </div>
                    </div>
                    <div className="d-card" tabIndex="0">
                        <img src="https://images.pexels.com/photos/9089313/pexels-photo-9089313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="rajasthan" />
                        <div className="Dtext">
                            <h2 data-splitting="">Rajasthan</h2>
                            <p data-splitting="">A symphony of regal palaces, ancient forts, and the golden hues of the Thar Desert, evoking a timeless and majestic charm.</p>
                        </div>
                    </div>
                    <div className="d-card" tabIndex="0">
                        <img src="https://images.pexels.com/photos/5015042/pexels-photo-5015042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ladakh" />
                        <div className="Dtext">
                            <h2 data-splitting="">Ladakh</h2>
                            <p data-splitting="">Stark yet stunning landscapes, where rugged mountains meet serene lakes, creating an awe-inspiring canvas of high-altitude allure.</p>
                        </div>
                    </div>
                    <div className="d-card" tabIndex="0">
                        <img src="https://images.pexels.com/photos/13691355/pexels-photo-13691355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Kerala" />
                        <div className="Dtext">
                            <h2 data-splitting="">Kerala</h2>
                            <p data-splitting="">Lush green backwaters, mist-covered hills of Munnar, and the rhythmic artistry of traditional dance – Kerala is a visual feast of natural and cultural marvels.</p>
                        </div>
                    </div>

                </main>
            </body>
        </div>
    );
}

