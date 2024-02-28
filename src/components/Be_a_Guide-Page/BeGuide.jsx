import React, { useEffect } from "react";
import './BeGuide.css';
import Navbar from "../Navbar";
import Footer from "../Footer";

function BeGuide() {
    return (
        <>
            <Navbar />
            {Display()}
            <Footer />
        </>
    );
}

function Display() {
    useEffect(() => {
        const handleScroll = () => {
            let value = window.scrollY;
            let text = document.getElementById('text');
            let bird1 = document.getElementById('bird1');
            let bird2 = document.getElementById('bird2');
            let btn = document.getElementById('btn');
            let rocks = document.getElementById('rocks');
            let forest = document.getElementById('forest');
            let header = document.getElementById('header');

            text.style.top = 50 + value * -.1 + '%';
            bird2.style.top = value * -1.5 + 'px';
            bird2.style.left = value * 2 + 'px';
            bird1.style.top = value * -1.5 + 'px';
            bird1.style.left = value * -5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
            rocks.style.top = value * -.12 + 'px';
            forest.style.top = value * .25 + 'px';
            header.style.top = value * .5 + 'px';
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup the event listener when the component is unmounted
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>

            <body className="guide-body">
                <section className="guide-section">
                    <h2 id="text"><span>It's time for a new</span><br></br>Adventure</h2>

                    <img src="https://user-images.githubusercontent.com/65358991/170092504-132fa547-5ced-40e5-ab64-ded61518fac2.png"
                        id="bird1"></img>
                    <img src="https://user-images.githubusercontent.com/65358991/170092542-9747edcc-fb51-4e21-aaf5-a61119393618.png"
                        id="bird2"></img>
                    <img src="https://user-images.githubusercontent.com/65358991/170092559-883fe071-eb4f-4610-8c8b-a037d061c617.png"
                        id="forest"></img>

                    <a href="#" id="btn">Be a Guide</a>

                    <img src="https://user-images.githubusercontent.com/65358991/170092605-eada6510-d556-45cc-b7fa-9e4d1d258d26.png"
                        id="rocks"></img>
                    <img src="https://user-images.githubusercontent.com/65358991/170092616-5a70c4af-2eed-496f-bde9-b5fcc7142a31.png"
                        id="water"></img>
                </section>
            </body>

            <div class="second">
                <h2>Become a Travel Guide and Explore the World with Us!</h2>
                <p>
                    <ul>
                        <li>
                            <h4>Registration Form</h4>
                        </li>
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Date of Birth</li>
                        <li>Nationality</li>
                        <li>Gender</li>
                        <li>Languages Spoken (multiple-choice checkboxes)</li>
                        <li>Brief Introduction (textarea)</li>
                        <li>Upload Photo: Allow guides to upload a professional photo.</li>
                        <li>Travel Experience (textarea): Allow guides to share their travel experiences and expertise.</li>
                    </ul>
                    <br></br>
                    <ul>
                        <li>
                            <h4>Destination Preferences</h4>
                        </li>
                        <li>Preferred Regions/Countries (multi-select dropdown or checkboxes)</li>
                        <li>Types of Tours Interested In (e.g., Adventure, Cultural, Food, etc.)</li>
                    </ul>
                    <br></br>
                    <ul>
                        <li>
                            <h4>Skills and Certifications</h4>
                        </li>
                        <li>Relevant Skills (checkboxes or text input)</li>
                        <li>Certifications or Licenses (textarea)</li>
                    </ul>
                    <br></br>
                    <ul>
                        <li>
                            <h4>Availability</h4>
                        </li>
                        <li>Specify availability by days of the week or months.</li>
                    </ul>
                    <br></br>
                    <ul>
                        <li>
                            <h4>Terms and Conditions</h4>
                        </li>
                        <li>Checkbox for agreeing to terms and conditions.</li>
                    </ul>
                    <br></br>
                    <ul>
                        <li>
                            <h4>Submit Button</h4>
                        </li>
                        <li>Clearly labeled "Submit" button to complete the registration.</li>
                    </ul>
                    <br></br>
                </p>
            </div>

        </div>
    );
}


export default BeGuide;
