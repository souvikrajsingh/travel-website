import React from "react";
import './popularity.css';

import Diversity1Icon from '@mui/icons-material/Diversity1';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export default function Popularity() {
    return (
        <div className="pop-container">
            <div className="pop-box">
                <div className="pop-logo">
                    <Diversity1Icon />
                </div>
                <h1>10000+</h1>
                <p>Happy Travelers</p>
            </div>

            <div className="pop-box">
                <div className="pop-logo">
                    <StarPurple500Icon />
                </div>
                <h1>10000+</h1>
                <p>5 Star Rating</p>
            </div>

            <div className="pop-box">
                <div className="pop-logo">
                    <CardTravelIcon />
                </div>
                <h1>10000+</h1>
                <p>Itineraries</p>
            </div>

            <div className="pop-box">
                <div className="pop-logo">
                    <PeopleAltIcon />
                </div>
                <h1>10000+</h1>
                <p>Active Guides</p>
            </div>
        </div>
    );
}