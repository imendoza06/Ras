import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import './LogIn.css';
import Logo from "../../Images/Logo.png";


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
            <div id="lbacker">
                <div id="topbar">
                    <Link to={`/`}><a class="hoverturn"><span data-title="Home">Home</span></a></Link>
                </div>
                <div id="logodiv">
                    <img id="loglogo" src={Logo} />
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