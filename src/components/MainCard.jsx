import React from 'react';
import ImageCard from './card/ImageCard';

function MainCard() {
    return (
        <div className="main-card relative p-4 min-w-min min-h-min">
            <div className="absolute top-0 left-0 mt-4 ml-4 text-2xl font-semibold">
                Trending Destinations
            </div>

            <div className="absolute top-0 right-0 mt-4 mr-4 text-lg">
                View all @
            </div>

            <div className="image-card">
                <ImageCard />
            </div>
        </div>
    );
}

export default MainCard;
