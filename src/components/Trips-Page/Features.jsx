import React from "react";
import './features.css';

import HikingIcon from '@mui/icons-material/Hiking';
import LuggageIcon from '@mui/icons-material/Luggage';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import KayakingIcon from '@mui/icons-material/Kayaking';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function Features() {
    return (
        <div>
            <h1 className="feat-title">TravelHikes Feature</h1>
            <div className="feat-container">

                <div className="feat-box">
                    <div className="feat-logo">
                        <HikingIcon />
                    </div>
                    <p>Backpacking</p>
                    <p>Trips</p>
                </div>

                <div className="feat-box">
                    <div className="feat-logo">
                        <LuggageIcon />
                    </div>
                    <p>Weekend</p>
                    <p>Trips</p>
                </div>

                <div className="feat-box">
                    <div className="feat-logo">
                        <ModeOfTravelIcon />
                    </div>
                    <p>Customised</p>
                    <p>Trips</p>
                </div>

                <div className="feat-box">
                    <div className="feat-logo">
                        <KayakingIcon />
                    </div>
                    <p>Adventure</p>
                    <p>Activities</p>
                </div>

                <div className="feat-box">
                    <div className="feat-logo">
                        <PersonPinIcon />
                    </div>
                    <p>Guide</p>
                    <p>Carriers</p>
                </div>
            </div>
        </div>
    );
}