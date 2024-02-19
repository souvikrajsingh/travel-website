import React from 'react';
import card_library from './card/card_library';

function createEntry(props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">

            <div className="px-6 py-4">
                <div>
                    <img className="w-full h-1/2 object-cover rounded" src={props.image} alt={props.name} />
                </div>

                <div className="mt-4">
                    <div className="text-md font-semibold mb-2">{props.name}</div>
                    <div className="text-gray-600 mb-2">{props.duration}</div>
                    <div className="text-yellow-500 mb-2">{props.reviews}</div>
                    <div className="text-md font-bold mb-2">{props.price}</div>
                </div>
            </div>

            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Book Now
                </button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Request callback
                </button>
            </div>
        </div>
    );
}

function ImageCard() {
    return (

        <div className="flex flex-wrap justify-center">

            <div className="max-w-4xl w-full mx-4 my-8 p-4 bg-white rounded shadow-lg">

                <div className="text-xl font-bold mb-4">
                    Destination Title
                </div>
                <div className="text-sm text-gray-600 mb-4">
                    View All
                </div>

                <div className="flex space-x-4 overflow-x-auto">
                    {card_library.map((card, index) => (
                        <div key={index} className="flex-shrink-0">
                            {createEntry(card)}
                        </div>
                    ))}
                </div>

            </div>

        </div>

    );
}

export default ImageCard;
