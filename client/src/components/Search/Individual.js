import React from "react";
import { Link } from "react-router-dom";
import './Individual.css'
import Test from "../Images/Test.jpg";
import Test2 from "../Images/Test2.jpg";
import Test3 from "../Images/Test3.jpeg";
import Searchicon from "../Images/Search.png";
import Logowhite from "../Images/LogoWhite.png";

const Individual = ({
    name,
    image,
    about,
    description,
    address,
    price,
    dimensions,
    amenities,
    isInside,
    isProfile,
    submitForm,
    input,
    inputaddress,
    handleAddressSearch,
    handleSearch,
    dates,
    rooms,
    times,
    handleDateChange,
    handleRoomChange,
    handleComments,
    date,
    room,
    time,
    comments,
    submitAvailiable,
    submitBooking,
    submitBookAgain,
    submitComments,
    studioarr,
    studioSearch,

}) => (
        <div id="ibacker">
            {isInside ?
                [
                    (isProfile === "User"
                        ?
                        <div id="topbar">
                            <div id="barlogo">
                                <Link to={`/`}>
                                    <img src={Logowhite} />
                                </Link>
                            </div>
                            <div id="ibar">
                                <div id="ibarcard">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={input}
                                        onChange={handleSearch}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        value={inputaddress}
                                        onChange={handleAddressSearch}
                                    />
                                    <Link to={`/search`}><button type="submit" onClick={submitForm}><img src={Searchicon}></img></button></Link>
                                </div>
                            </div>
                            <Link to={`/logout`}>
                                <a class="hoverturn">
                                    <span data-title="Log Out">Log Out</span>
                                </a>
                            </Link>
                            <Link to={`/userprofile/account`}>
                                <a class="hoverturn">
                                    <span data-title="My Account">My Account</span>
                                </a>
                            </Link>
                        </div>
                        : <div id="topbar">
                            <div id="barlogo">
                                <Link to={`/`}>
                                    <img src={Logowhite} />
                                </Link>
                            </div>
                            <div id="ibar">
                                <div id="ibarcard">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={input}
                                        onChange={handleSearch}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        value={inputaddress}
                                        onChange={handleAddressSearch}
                                    />
                                    <Link to={`/search`}><button type="submit" onClick={submitForm}><img src={Searchicon}></img></button></Link>
                                </div>
                            </div>
                            <Link to={`/logout`}>
                                <a class="hoverturn">
                                    <span data-title="Log Out">Log Out</span>
                                </a>
                            </Link>
                            <Link to={`/hostprofile/account`}>
                                <a class="hoverturn">
                                    <span data-title="My Account">My Account</span>
                                </a>
                            </Link>
                        </div>
                    )
                ]
                :
                <div id="topbar">
                    <div id="barlogo">
                        <Link to={`/`}>
                            <img src={Logowhite} />
                        </Link>
                    </div>
                    <div id="ibar">
                        <div id="ibarcard">
                            <input
                                type="text"
                                placeholder="Name"
                                value={input}
                                onChange={handleSearch}
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={inputaddress}
                                onChange={handleAddressSearch}
                            />
                            <Link to={`/search`}><button type="submit" onClick={submitForm}><img src={Searchicon}></img></button></Link>
                        </div>
                    </div>
                    <Link to={`/login`}>
                        <a class="hoverturn">
                            <span data-title="Log In">Log In</span>
                        </a>
                    </Link>
                    <Link to={`/signup`}>
                        <a class="hoverturn">
                            <span data-title="Sign Up">Sign Up</span>
                        </a>
                    </Link>
                </div>
            }
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
                            <p id="studiotopsub">Dance Studio For The Masses</p>
                            <h1>{name}</h1>
                            <p id="studioaddress">Brooklyn,NY</p>
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
                            {date && room ?
                                [
                                    (time
                                        ?
                                        [
                                            (comments
                                                ?
                                                <div id="bookinfo">
                                                    <p>You Have Successfully Booked</p>
                                                    <p>For <strong>{date}</strong></p>
                                                    <p>In Room <strong>{room}</strong></p>
                                                    <p>At <strong>{time}</strong>.</p>
                                                    <p>You Can See Your Booking In Your User Profile.</p>
                                                    <button type="submit" onClick={submitBookAgain} >Book Here Again</button>
                                                </div>
                                                : <div id="bookcomments">
                                                    <p id="timesh">Please Give Host Information On Your Usage</p>
                                                    <textarea placeholder="Comments" onChange={handleComments} />
                                                    <button type="submit" onClick={submitComments} >Submit</button>
                                                </div>
                                            )
                                        ]
                                        : <div>
                                            <p id="timesh">Choose A Time</p>
                                            <div id="times">
                                                {times.map(time => <div> {time}<br /><button type="submit" name={time} onClick={submitBooking} >Book Now</button></div>)}
                                            </div>
                                        </div>
                                    )
                                ]
                                :
                                <div id="dateroom">
                                    <p>Date</p>
                                    <select onChange={handleDateChange}>
                                        {dates.map(date => <option value={date}>{date}</option>)}
                                    </select>
                                    <p>Rooms</p>
                                    <select onChange={handleRoomChange}>
                                        {rooms.map(room => <option value={room}>{room}</option>)}
                                    </select>
                                    <br />
                                    <button type="submit" onClick={submitAvailiable} >Check Availiability</button>
                                </div>
                            }
                        </div>
                    </div>
                </section>
            </main>

            <div id="footer">
                <Link to={`/contact`}><a class="hoverturn"><span data-title="Contact">Contact</span></a></Link>
                <Link to={`/about`}><a class="hoverturn"><span data-title="About Us">About Us</span></a></Link>
                <p>RAS @ 2018</p>
            </div>
        </div>
    );

export default Individual;
