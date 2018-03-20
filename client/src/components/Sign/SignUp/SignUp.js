import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import './SignUp.css';
import Logo from "../../Images/Logo.png";


class Signup extends React.Component {
    state = { fname:"", lname:"", email: "", password: "", confirm: "", profile: "Choose Account Type", busname:"", address:"", zip:"" };

    handleFirstName = e => {
        this.setState({
            fname: e.target.value
        });
    };
    handleLastName = e => {
        this.setState({
            lname: e.target.value
        });
    };
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
    handleBusiness = e => {
        this.setState({
            busname: e.target.value
        });
    };
    handleAddress = e => {
        this.setState({
            address: e.target.value
        });
    };
    handleZip = e => {
        this.setState({
           zip: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();

    };

    render() {
        const { fname, lname, email, password, confirm, profile, busname, address, zip } = this.state;
        const types = ["Choose Account Type", "User", "Business"];

        return (
            <div id="sbacker">
                <div id="topbar">
                    <Link to={`/`}><a class="hoverturn"><span data-title="Home">Home</span></a></Link>
                </div>
                <div id="logodiv">
                    <img id="loglogo" src={Logo} />
                </div>
                <div id="signup">
                    <h1> Sign Up </h1>
                    <p>Please Scroll To Fill Out All Information</p>
                    {profile === "User" || profile === "Choose Account Type" ? (
                        <div>
                            <form onSubmit={this.submitForm}>
                                <div id="overflow">
                                    <select onChange={this.handleTypeChange}>
                                        {types.map(type => (
                                            <option value={type}>{type}</option>
                                        ))}
                                    </select>
                                    <br></br>
                                    <label>
                                        <input
                                            type="text"
                                            name="fname"
                                            placeholder="First Name"
                                            value={fname}
                                            onChange={this.handleFirstName}
                                        />
                                    </label>
                                    <br></br>
                                    <label>
                                        <input
                                            type="text"
                                            name="lname"
                                            placeholder="Last Name"
                                            value={lname}
                                            onChange={this.handleLastName}
                                        />
                                    </label>
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
                                    <label>
                                        <input
                                            type="password"
                                            name="passconfirm"
                                            placeholder="Confirm Password"
                                            value={confirm}
                                            onChange={this.handleConfirmPassword}
                                        />
                                    </label>
                                </div>
                                <br></br>
                                <input type="submit" value="Submit" />
                            </form>
                            <Link to={`/login`}><a>Already Have An Account? Log In Here</a></Link>
                        </div>
                    ) : (
                            <div>
                                <form onSubmit={this.submitForm}>
                                    <div id="overflow">
                                        <select onChange={this.handleTypeChange}>
                                            {types.map(type => (
                                                <option value={type}>{type}</option>
                                            ))}
                                        </select>
                                        <br></br>
                                        <label>
                                            <input
                                                type="text"
                                                name="fname"
                                                placeholder="First Name"
                                                value={fname}
                                                onChange={this.handleFirstName}
                                            />
                                        </label>
                                        <br></br>
                                        <label>
                                            <input
                                                type="text"
                                                name="lname"
                                                placeholder="Last Name"
                                                value={lname}
                                                onChange={this.handleLastName}
                                            />
                                        </label>
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
                                        <label>
                                            <input
                                                type="password"
                                                name="passconfirm"
                                                placeholder="Confirm Password"
                                                value={confirm}
                                                onChange={this.handleConfirmPassword}
                                            />
                                        </label>
                                        <br></br>
                                        <p>Business Information</p>
                                        <label>
                                            <input
                                                type="password"
                                                name="busname"
                                                placeholder="Business Name"
                                                value={busname}
                                                onChange={this.handleBusiness}
                                            />
                                        </label>
                                        <br></br>
                                        <label>
                                            <input
                                                type="password"
                                                name="address"
                                                placeholder="Address"
                                                value={address}
                                                onChange={this.handleAddress}
                                            />
                                        </label>
                                        <br></br>
                                        <label>
                                            <input
                                                type="password"
                                                name="zip"
                                                placeholder="Zip Code"
                                                value={zip}
                                                onChange={this.handleZip}
                                            />
                                        </label>
                                    </div>
                                    <br></br>
                                    <input type="submit" value="Submit" />
                                </form>
                                <Link to={`/login`}><a>Already Have An Account? Log In Here</a></Link>
                            </div>
                        )}
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

export default Signup;