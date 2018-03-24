import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import './About.css';
import Logo from "../Images/Logo.png";
import Instagram from "../Images/Instagram.png";
import Facebook from "../Images/Facebook.png";
import Twitter from "../Images/Twitter.png";
import Linkedin from "../Images/Linkedin.png";
import MenuIcon from "../Images/MenuIcon.png";
import Rocket from "../Images/Rocket.png";
import Promises from "../Images/Promise.png";
import Paperplane from "../Images/Paperplane.png";


class About extends React.Component {
    state = { input: "", selected: null, };

    handleSearch = e => {
        this.setState({
            input: e.target.value
        });
    };

    render() {
        const { input, selected } = this.state;
        return (
            <div id="abacker">
                <div id="topbar">
                    <Link to={`/login`}><a class="hoverturn"><span data-title="Log In">Log In</span></a></Link>
                    <Link to={`/signup`}><a class="hoverturn"><span data-title="Sign Up">Sign Up</span></a></Link>
                </div>
                <div id="vermenu">
                    <nav>
                        <ul>
                            <li class="var_nav">
                                <div class="link_bg"></div>
                                <div class="link_title">
                                    <div class="icon">
                                        <img src={MenuIcon} />
                                    </div>
                                    <a href="#aboutheader"><span>Top</span></a>
                                </div>
                            </li>
                            <li class="var_nav">
                                <div class="link_bg"></div>
                                <div class="link_title">
                                    <div class="icon">
                                        <img src={MenuIcon} />
                                    </div>
                                    <a href="#aboutpurpose"><span>Purpose</span></a>
                                </div>
                            </li>
                            <li class="var_nav">
                                <div class="link_bg"></div>
                                <div class="link_title">
                                    <div class="icon">
                                        <img src={MenuIcon} />
                                    </div>
                                    <a href="#aboutservices"><span>Services</span></a>
                                </div>
                            </li>
                            <li class="var_nav">
                                <div class="link_bg"></div>
                                <div class="link_title">
                                    <div class="icon">
                                        <img src={MenuIcon} />
                                    </div>
                                    <a href="#aboutconnect"><span>Connect</span></a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <main class="wrapper">
                    <section class="section parallax bg3" id="aboutheader">
                    <div id="bottom">
                    </div>
                    <div class="aboutbg">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="500px" viewBox="0 0 612 792">
                    <g id="R">
	                    <path class="pathword" x="10px" y="0px" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                        stroke-dasharray="1400" stroke-dashoffset="1410" d="M219.3,311.3c0,0-4.4-4.5-11.8-12c-35.5-36.3-138.9-142-138.9-142L65,634.7l63.7-61.3L124,396l68.7,110.7
		                l26-24.7l-45.3-86h45.3L219.3,311.3z M196,370l-84-13.3c0,0-0.3-21.7-0.6-43.7c-0.3-22.9-0.7-46.3-0.7-46.3L196,340V370z"/>
                    </g>
                    <g id="A">
	                    <path class="pathword" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                        stroke-dasharray="900" stroke-dashoffset="910" fill="none" d="M219.3,311.3L218.7,482l44.7-0.7v-44.7H344v44.7c0,0,0.2,0,0.7,0c5.6,0,44.7,0,44.7,0l0.7-170.7L219.3,311.3z
		                M344,396.7l-80.7-0.7l-0.7-52.7c0,0,73.5,0.6,81.3,0.7c0.4,0,0.7,0,0.7,0L344,396.7z"/>
                    </g>
                    <g id="S">
	                    <polyline class="pathword" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                        stroke-dasharray="1450" stroke-dashoffset="1460" fill="none" points="390,310.7 542,157.3 542.7,271.3 466,318.3 466,370 547,339.3 542.3,634.7 389.3,481.3 390,429.3 
		                463.3,473.3 462,421.3 390,396 390,310.7 	"/>
                    </g>
                    <g id="TL">
	                    <path class="path" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                        stroke-dasharray="500" stroke-dashoffset="500" fill="none" d="M131.9,157.3c-19.2,0-33.9,0-33.9,0l133.3,137.3l-12-137.3C219.3,157.3,167.8,157.3,131.9,157.3z"/>
                    </g>
                    <g id="TM">
	                    <polyline class="path" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                        stroke-dasharray="500" stroke-dashoffset="500" fill="none" points="241.3,157.3 254,294.7 354,294.7 368,157.3 241.3,157.3 	"/>
                    </g>
                    <g id="TR">
	                    <path class="path" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                        stroke-dasharray="500" stroke-dashoffset="500" fill="none" d="M475.8,157.3c19.2,0,33.9,0,33.9,0L376.4,294.7l12-137.3C388.4,157.3,439.9,157.3,475.8,157.3z"/>
                    </g>
                    <g id="DL">
	                    <path class="path" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                        stroke-dasharray="500" stroke-dashoffset="500" fill="none" d="M131.9,635.3c-19.2,0-33.9,0-33.9,0L231.3,498l-12,137.3C219.3,635.3,167.8,635.3,131.9,635.3z"/>
                    </g>
                    <g id="DM">
	                    <polyline class="path" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                        stroke-dasharray="500" stroke-dashoffset="500" fill="none" points="242.7,635.3 255.3,498 355.3,498 369.3,635.3 242.7,635.3 	"/>
                    </g>
                    <g id="DR">
	                    <path class="path" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                        stroke-dasharray="500" stroke-dashoffset="500" fill="none" d="M475.8,635.3c19.2,0,33.9,0,33.9,0L376.4,498l12,137.3C388.4,635.3,439.9,635.3,475.8,635.3z"/>
                    </g>
                    </svg>
                <div id="subabout">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="900px" height="200px" viewBox="0 0 400 150">                     
                     <text transform="matrix(1 0 0 1 75.2403 66.4661)" class="pathsub" stroke="#92dce5" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                       stroke-dasharray="500" stroke-dashoffset="500" fill="black">Your One Stop Shop Studio Marketplace </text>

                    </svg>
                </div>
                </div> 
                    </section>
                    <section class="section bg4" id="aboutpurpose">
                        <h1 id="whoheader">Who Are We?</h1>
                        <p id="whop"> RAS, which also stands for Rent A Studio, is a web application made to make the process of booking a studio a whole lot easier.
                            We provide a place where studios and users can interact and book in a blink of an eye. </p>
                        <div id="purposelist">
                            <div>
                                <img src={Rocket} />
                                <h3>Mission</h3>
                                <p>RAS was built to become the center place for all that in creative and social and help people find their place to pursue their interests.</p>
                            </div>
                            <div>
                                <img src={Promises} />
                                <h3>Promise</h3>
                                <p>We strive to provide users and businesses with seamless transactions and quick resolutions.</p>
                            </div>
                            <div>
                                <img src={Paperplane} />
                                <h3>Dream</h3>
                                <p>We imagine a world filled with new ideas and groundbreaking projects.</p>
                            </div>
                        </div>
                    </section>
                    <section class="section parallax bg5" id="aboutservices">
                        <h1>Services We Provide</h1>
                        <div id="services">
                            <div>
                            <h3>Businesses</h3>

                            </div>
                            <div>
                            <h3>Users</h3>
                            </div>
                        </div>
                    </section>
                    <section class="section blackbg" id="aboutconnect">
                        <h1> <a href="#" class="effect-shine">Connect WIth Us</a> </h1>
                        <div id="connecticons">
                            <img id="instagram"src={Instagram} />
                            <img id="twitter"src={Twitter} />
                            <img id="facebook" src={Facebook} />
                            <img id="linkedin"src={Linkedin} />
                        </div>
                    </section>
                    </main>
                <div id="footer">
                    <Link to={`/contact`}><a class="hoverturn"><span data-title="Contact">Contact</span></a></Link>
                    <Link to={`/`}><a class="hoverturn"><span data-title="Home">Home</span></a></Link>
                    <p>RAS @ 2018</p>
                </div>
            </div>
        );
    }
}

export default About;