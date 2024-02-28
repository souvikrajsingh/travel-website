import React from 'react';
import '../ImageCard.css';

function ImageCard() {
    return (
        <div>

            <div class="imgBody-left">
                <div class="card">
                    <img class="left"
                        src="https://images.pexels.com/photos/5310312/pexels-photo-5310312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div>
                        <h2>Adventure in Spiti Valley</h2>
                        <h3>5 days & 4 nights</h3>
                        <p>⭐ 4.5 (2.8k)</p>
                        <p>description here</p>
                        <p>INR 18,500</p>
                        <button>Explore</button>
                    </div>
                </div>
            </div>

            <div class="imgBody-right">
                <div class="card">
                    <img class="right"
                        src="https://images.pexels.com/photos/16443956/pexels-photo-16443956/free-photo-of-milkyway-behind-the-chorten.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div>
                        <h2>Exclusive Winter Spiti</h2>
                        <h3>7 days & 6 nights</h3>
                        <p>⭐ 4.9 (3.4k)</p>
                        <p>description here</p>
                        <p>INR 22,800</p>
                        <button>Explore</button>
                    </div>
                </div>
            </div>

            <div class="imgBody-left">
                <div class="card">
                    <img class="left"
                        src="https://images.pexels.com/photos/5324310/pexels-photo-5324310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div>
                        <h2>Cultural Spiti Experience</h2>
                        <h3>6 days & 5 nights</h3>
                        <p>⭐ 4.8 (3.2k)</p>
                        <p>description here</p>
                        <p>INR 20,000</p>
                        <button>Explore</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ImageCard;
