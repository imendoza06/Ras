import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import './Home.css';
import Logo from "../Images/Logo.png";


class Home extends React.Component {
    state = { selected: "", input: "", address: "" };

    handleSelect = e => {
        this.setState({
            selected: e.target.value
        });
    };
    handleSearch = e => {
        this.setState({
            input: e.target.value
        });
    };
    handleAddressSearch = e => {
        this.setState({
            address: e.target.value
        });
    };

    render() {
        const { selected, input, address } = this.state;
        const categories = ["", "Dance", "Art", "Photography"];
        return (
            <div>
                <div id="backer">
                    <div id="topbar">
                        <Link to={`/login`}><a class="hoverturn"><span data-title="Log In">Log In</span></a></Link>
                        <Link to={`/signup`}><a class="hoverturn"><span data-title="Sign Up">Sign Up</span></a></Link>
                    </div>
                    <div id="header">
                        <img id="logo" class="center" src={Logo} />
                        <h3 class="center" >Rent A Studio Efficiently</h3>
                        <div class="center" id="search">
                            <select onChange={this.handleSelect}>
                                {categories.map(category => (
                                    <option value={category}>{category}</option>
                                ))}
                            </select>
                            <input
                                type="text"
                                placeholder="Name"
                                value={input}
                                onChange={this.handleSearch} />
                            <input
                                type="text"
                                placeholder="Address"
                                value={address}
                                onChange={this.handleAddressSearch} />
                            <button type="submit">Search</button>
                        </div>
                        <br />
                        <img alt="Arrow Down Icon" class="center" src="https://www.solodev.com/assets/anchor/arrow-down.png" />
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div id="footer">
                        <Link to={`/contact`}><a class="hoverturn"><span data-title="Contact">Contact</span></a></Link>
                        <Link to={`/about`}><a class="hoverturn"><span data-title="About Us">About Us</span></a></Link>
                        <p>RAS @ 2018</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;