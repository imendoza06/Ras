import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import './LogIn.css';
import Logo from "../../Images/Logo.png";
import Flip from "../../Images/FlipLogo.png";


class Login extends React.Component {
    state = { email: "", password: "", confirm: "", profile: "Choose Account Type" };

    handleEmail = e => {
        this.setState({
            email: e.target.value
        });
    };
    handlePassword = e => {
        this.setState({
            password: e.target.value
        });
    };
    handleTypeChange = e => {
        this.setState({
            profile: e.target.value
        });
    };
    handleConfirmPassword = e => {
        this.setState({
            confirm: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();

    };

    render() {
        const { email, password, confirm, profile} = this.state;
        const types = ["Choose Account Type", "User", "Business"];

        return (
            <div id="lsbacker">
                <div id="topbar">
                    <Link to={`/`}><a class="hoverturn"><span data-title="Home">Home</span></a></Link>
                </div>
                <div id="lscontent">
                <div id="logodiv">
                <div id="f1_container">
                     <div id="f1_card" class="shadow">
                     <div >
                    <svg class="front face center" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="500px"viewBox="0 0 612 792" width="500px" >
                    <g id="R">
	                   <path d="M219.3,311.3c0,0-4.4-4.5-11.8-12c-35.5-36.3-138.9-142-138.9-142L65,634.7l63.7-61.3L124,396l68.7,110.7
		               l26-24.7l-45.3-86h45.3L219.3,311.3z M196,370l-84-13.3c0,0-0.3-21.7-0.6-43.7c-0.3-22.9-0.7-46.3-0.7-46.3L196,340V370z"/>
                    </g>
                    <g id="A">
	                   <path d="M219.3,311.3L218.7,482l44.7-0.7v-44.7H344v44.7c0,0,0.2,0,0.7,0c5.6,0,44.7,0,44.7,0l0.7-170.7L219.3,311.3z
		               M344,396.7l-80.7-0.7l-0.7-52.7c0,0,73.5,0.6,81.3,0.7c0.4,0,0.7,0,0.7,0L344,396.7z"/>
                    </g>
                    <g id="S">
	                   <polyline points="390,310.7 542,157.3 542.7,271.3 466,318.3 466,370 547,339.3 542.3,634.7 389.3,481.3 390,429.3 
		               463.3,473.3 462,421.3 390,396 390,310.7 	"/>
                    </g>
                    <g id="TL">
	                   <path d="M131.9,157.3c-19.2,0-33.9,0-33.9,0l133.3,137.3l-12-137.3C219.3,157.3,167.8,157.3,131.9,157.3z"/>
                    </g>
                    <g id="TM">
	                   <polyline points="241.3,157.3 254,294.7 354,294.7 368,157.3 241.3,157.3 	"/>
                    </g>
                    <g id="TR">
	                   <path  d="M475.8,157.3c19.2,0,33.9,0,33.9,0L376.4,294.7l12-137.3C388.4,157.3,439.9,157.3,475.8,157.3z"/>
                    </g>
                    <g id="DL">
	                   <path d="M131.9,635.3c-19.2,0-33.9,0-33.9,0L231.3,498l-12,137.3C219.3,635.3,167.8,635.3,131.9,635.3z"/>
                    </g>
                    <g id="DM">
	                   <polyline points="242.7,635.3 255.3,498 355.3,498 369.3,635.3 242.7,635.3 	"/>
                    </g>
                    <g id="DR">
	                   <path d="M475.8,635.3c19.2,0,33.9,0,33.9,0L376.4,498l12,137.3C388.4,635.3,439.9,635.3,475.8,635.3z"/>
                    </g>
                    </svg>
                    </div>
                    <div id="fliper" class="back face center">
                        <img src={Flip}/>
                     </div>
                    </div>
                    </div>
                </div>
                <div id="login">
                    <h1> Log In </h1>
                    <p>Please Fill Out All Information</p>
                    <form onSubmit={this.submitForm}>
                        <select onChange={this.handleTypeChange}>
                            {types.map(type => (
                                <option value={type}>{type}</option>
                            ))}
                        </select>
                        <br></br>
                        <label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                title="Please give a valid email"
                                value={email}
                                onChange={this.handleEmail}
                            />
                        </label>
                        <br></br>
                        <label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                pattern=".{8,}"
                                title="Eight or more characters"
                                value={password}
                                onChange={this.handlePassword}
                            />
                        </label>
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                    <Link to={`/signup`}><a>New User? Sign Up Here</a></Link>
                </div>
                </div>
                <div id="footer">
                    <Link to={`/contact`}><a class="hoverturn"><span data-title="Contact">Contact</span></a></Link>
                    <Link to={`/about`}><a class="hoverturn"><span data-title="About Us">About Us</span></a></Link>
                    <p>RAS @ 2018</p>
                </div>
            </div>
        );
    }
}

export default Login;