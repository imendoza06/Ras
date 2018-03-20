import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import './About.css';
import Logo from "../Images/Logo.png";


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
                <div class="bg">
                    <div id="R"> 
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="530px" viewBox="0 0 612 792"> 
                      <path class="pathword" x="10px" y="0px" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                       stroke-dasharray="1400" stroke-dashoffset="1410" d="M219.3,311.3c0,0-4.4-4.5-11.8-12c-35.5-36.3-138.9-142-138.9-142L65,634.7l63.7-61.3L124,396l68.7,110.7
                       l26-24.7l-45.3-86h45.3L219.3,311.3z M196,370l-84-13.3c0,0-0.3-21.7-0.6-43.7c-0.3-22.9-0.7-46.3-0.7-46.3L196,340V370z"/>
                    </svg>
                </div>
                <div id="A">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="500px" viewBox="0 0 612 792">                     
                    <g id="A">
                      <path class="pathword" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                       stroke-dasharray="900" stroke-dashoffset="910" fill="none" d="M219.3,311.3L218.7,482l44.7-0.7v-44.7H344v44.7c0,0,0.2,0,0.7,0c5.6,0,44.7,0,44.7,0l0.7-170.7L219.3,311.3z
                       M344,396.7l-80.7-0.7l-0.7-52.7c0,0,73.5,0.6,81.3,0.7c0.4,0,0.7,0,0.7,0L344,396.7z" />
                    </g>
                    </svg>
                </div>
                <div id="S">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="530px" viewBox="0 0 612 792">                     
                    <g id="S">
                      <polyline class="pathword" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                       stroke-dasharray="1450" stroke-dashoffset="1460" fill="none" points="390,310.7 542,157.3 542.7,271.3 466,318.3 466,370 547,339.3 542.3,634.7 389.3,481.3 390,429.3 
		               463.3,473.3 462,421.3 390,396 390,310.7 	"/>
                    </g>
                    </svg>
                </div>
                <div id="TL">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="530px" viewBox="0 0 612 792">                     
                    <g id="TL">
	                  <path class="path" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                       stroke-dasharray="500" stroke-dashoffset="500" fill="none" d="M131.9,157.3c-19.2,0-33.9,0-33.9,0l133.3,137.3l-12-137.3C219.3,157.3,167.8,157.3,131.9,157.3z"/>
                    </g>
                    </svg>
                </div>
                <div id="TM">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="530px" viewBox="0 0 612 792">                     
                    <g id="TM">
	                  <polyline class="path" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                       stroke-dasharray="500" stroke-dashoffset="500" fill="none" points="241.3,157.3 254,294.7 354,294.7 368,157.3 241.3,157.3 	"/>
                    </g>
                    </svg>
                </div>
                <div id="TR">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="530px" viewBox="0 0 612 792">                     
                    <g id="TR">
	                  <path class="path" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                       stroke-dasharray="500" stroke-dashoffset="500" fill="none" d="M475.8,157.3c19.2,0,33.9,0,33.9,0L376.4,294.7l12-137.3C388.4,157.3,439.9,157.3,475.8,157.3z"/>
                    </g>                    
                    </svg>
                </div>
                <div id="DL">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="530px" viewBox="0 0 612 792">                     
                    <g id="DL">
	                  <path class="path" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                       stroke-dasharray="500" stroke-dashoffset="500" d="M131.9,635.3c-19.2,0-33.9,0-33.9,0L231.3,498l-12,137.3C219.3,635.3,167.8,635.3,131.9,635.3z"/>
                    </g>
                    </svg>
                </div>
                <div id="DM">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="530px" viewBox="0 0 612 792">                     
                    <g id="DM">
	                  <polyline class="path fillin" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                       stroke-dasharray="500" stroke-dashoffset="500" points="242.7,635.3 255.3,498 355.3,498 369.3,635.3 242.7,635.3 	"/>
                    </g>
                    </svg>
                </div>
                <div id="DR">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="530px" viewBox="0 0 612 792">                     
                    <g id="DR">
	                  <path class="path" stroke="#6ba1a7" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                       stroke-dasharray="500" stroke-dashoffset="500" fill="black" d="M475.8,635.3c19.2,0,33.9,0,33.9,0L376.4,498l12,137.3C388.4,635.3,439.9,635.3,475.8,635.3z"/>
                    </g>
                    </svg>
                </div>
                <div id="subabout">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="900px" height="200px" viewBox="0 0 400 150">                     
                     <text transform="matrix(1 0 0 1 75.2403 66.4661)" class="path sub" stroke="#6ba1a7" stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10"
                       stroke-dasharray="500" stroke-dashoffset="500" fill="#000000">Your One Stop Shop Studio Marketplace </text>

                    </svg>
                </div>
                </div>
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