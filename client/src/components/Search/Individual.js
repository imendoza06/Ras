import React from "react";
import { Link } from "react-router-dom";
import './Individual.css'
import Test from "../Images/Test.jpg";
import Test2 from "../Images/Test2.jpg";
import Test3 from "../Images/Test3.jpeg";
import Searchicon from "../Images/Search.png";

const Individual = ({
    name, image, about, description, address, price, dimensions, amenities

}) => (
        <div id="ibacker">
            <div id="topbar">
                <div id="ibar">
                    <div id="ibarcard">
                        <input
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                        />
                        <Link to={`/search`}><button type="submit"><img src={Searchicon}></img></button></Link>
                    </div>
                </div>
                <Link to={`/login`}><a class="hoverturn"><span data-title="Log In">Log In</span></a></Link>
                <Link to={`/signup`}><a class="hoverturn"><span data-title="Sign up">Sign Up</span></a></Link>
            </div>
            <main class="wrapper">
                <section class="section imgsection parallax">
                    <div id="indiv">
                        <img src={Test} />
                        <br></br>
                    </div>
                </section>
                <section class="section isection whitebg">
                    <div id="studiocontent">
                        <div id="studioinfo">
                            <h1>{name}</h1>
                            <h3>Brooklyn,NY</h3>
                            <h3>About The Studio</h3>
                            <p>The best place and area in Brooklyn "Prospect Park"
                            Prospect Park is a 526-acre (213 hectare)[4] public park in the New York City borough of Brooklyn, and the second largest public park in Brooklyn. That's exactly where you going to be a few step away from it, plus restaurants. Is a Private Bedroom 1 Bed, 1 bath furnished with a Queen sized bed.Perfect for a couples and travelers
                            You'll be a few blocks from Subway Q and B line so you will be in Manhattan in no time.</p>
                            <div>
                                <h3>Hours</h3>
                                <p> 9:00 to 5:00 Monday - Friday</p>
                            </div>
                            <div>
                                <h3>Amenities</h3>
                                <p>Elevator</p>
                            </div>
                            <div>
                                <h3>Rules</h3>
                                <p>No Food</p>
                            </div>
                        </div>
                        <div id="book">
                            <h3>$45 per hour</h3>
                            <p> Date</p>
                            <select></select>
                            <p> Rooms</p>
                            <select></select>
                            <br/>
                            <button>Book Now</button>
                        </div>
                    </div>
                </section>
            </main>

            <div id="footer">
                <Link to={`/contact`}><a class="hoverturn"><span data-title="Contact">Contact</span></a></Link>
                <Link to={`/about`}><a class="hoverturn"><span data-title="About Us">About Us</span></a></Link>
                <Link to={`/`}><a class="hoverturn"><span data-title="Home">Home</span></a></Link>
                <p>RAS @ 2018</p>
            </div>
        </div>
    );

export default Individual;
