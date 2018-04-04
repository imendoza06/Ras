import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddBusiness.css'
import Logowhite from "../../Images/LogoWhite.png";

import Api from "../../Api/Api";

class AddingBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studio_Name: "",
      studio_Address: "",
      city: "",
      state: "",
      zipcode: 0,
      description: "",
      category: "",
      isLogin: false
    };
  }

  handleName = e => {
    this.setState({
      studio_Name: e.target.value
    });
  };

  handleAddress = e => {
    this.setState({
      studio_Address: e.target.value
    });
  };

  handleCity = e => {
    this.setState({
      city: e.taget.value
    });
  };

  handleZipcode = e => {
    this.setState({
      zipcode: e.target.value
    });
  };

  handleDescription = e => {
    this.setState({
      description: e.taget.value
    });
  };

  handleCategory = e => {
    this.setState({
      category: e.taget.value
    });
  };
  handleLogout = () => {
    Api.getLogout();
    console.log("You have logout!");
  };
  submitForm = e => {
    e.preventDefault();
  };

  render() {
    const {
      studio_Name,
      studio_Address,
      city,
      state,
      zipcode,
      description,
      category,
      isLogin
    } = this.state;
    return <div id="addbacker">
        <div id="topbar">
          <div id="barlogo">
            <Link to={`/`}>
              <img src={Logowhite} alt="logo" />
            </Link>
          </div>
          <Link to={`/login`}>
            <a class="hoverturn" onClick={this.handleLogout}>
              <span data-title="Log Out">Log Out</span>
            </a>
          </Link>
          <Link to={`/hostprofile/account`}>
            <a class="hoverturn">
              <span data-title="My Account">My Account</span>
            </a>
          </Link>
        </div>
        <div className="addcontent">
          <h1>Add Your Studio</h1>
          <br />
          <form>
            <input id="name" name="" type="text" placeholder="Studio Name" onChange={this.handleAddress} />
            <br />
            <input name="" type=" text" placeholder="Studio Address" onChange={this.handleAddress} />
            <br />
            <input name="" type="text" placeholder="City" onChange={this.handleAddress} />
            <br />
            <input name="" type="text" placeholder="State" onChange={this.handleAddress} />
            <br />
            <input name="" type="number" placeholder="Zip Code" onChange={this.handleAddress} />
            <br />
            <input name="" type="text" placeholder="Describe Your Business" onChange={this.handleAddress} />
            <br />
            <input name="" type="text" placeholder="Category ex: Music, Art" onChange={this.handleAddress} />
            <br />
            <button type="submit" onClick={this.submitForm}>
              Add Studio
            </button>
          </form>
        </div>
        <div id="footer">
          <Link to={`/contact`}>
            <a class="hoverturn">
              <span data-title="Contact">Contact</span>
            </a>
          </Link>
          <Link to={`/about`}>
            <a class="hoverturn">
              <span data-title="About Us">About Us</span>
            </a>
          </Link>
          <p>RAS @ 2018</p>
        </div>
      </div>;
  }
}
export default AddingBusiness;