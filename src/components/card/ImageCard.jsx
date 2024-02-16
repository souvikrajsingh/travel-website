import React from 'react';
import card_library from './card_library';

function createEntry(props) {
    return (
        <div className="bg-white rounded-md shadow-md p-4 mb-4" style={{ width: '340px', height: '450px' }}>
            <div className="mb-4">
                <img src={props.image} alt={props.name} className="w-full h-1/2 object-cover rounded" />
            </div>

            <div className="flex flex-col">
                <div className="text-md font-semibold mb-2">{props.name}</div>

                <div className="text-gray-600 mb-2">{props.duration}</div>

                <div className="text-yellow-500 mb-2">{props.reviews}</div>

                <div className="text-md font-bold mb-2">{props.price}</div>

                <div className="flex justify-between">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Book Now
                    </button>

                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
}

function ImageCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {card_library.map(createEntry)}
        </div>
    );
}

export default ImageCard;
