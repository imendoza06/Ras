import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./UserProfile.css";
import Logowhite from "../../Images/LogoWhite.png";
import Searchicon from "../../Images/Search.png";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: ""
    }
  };


  render() {
    console.log(this.props.isLogged)
    return (
      <div id="upbacker">
        <div id="topbar">
          <div id="barlogo">
            <Link to={`/`}>
              <img src={Logowhite} />
            </Link>
          </div>
          <Link to={`/login`}>
            <a class="hoverturn">
              <span data-title="Log Out">Log Out</span>
            </a>
          </Link>
        </div>
        <div id="topbox">
          <div className="picturez">
            <div id="pic1">
              <a href="http://www.houseofmovementny.com/">
                <img
                  border="0"
                  alt="pic1"
                  src="https://static1.squarespace.com/static/5999f051e6f2e19ff03f83ac/t/5999fb7dd2b857d71bea9ec2/1504039738772/Ballet+Class?format=500w"
                />
              </a>{" "}
              <br />
            </div>{" "}
            <div id="pic2">
              <a href="http://www.houseofmovementny.com/">
                <img
                  border="0"
                  alt="pic2"
                  src="https://media.timeout.com/images/103238690/image.jpg"
                />
              </a>
            </div>
            <br />{" "}
            <div id="pic3">
              <a href="http://www.houseofmovementny.com/">
                <img
                  border="0"
                  alt="pic3"
                  src="https://www.theaileyschool.edu/sites/default/files/styles/default_manual_crop/public/school_scholarship_5.jpg?itok=Kqa3iIQW"
                />
              </a>
            </div>
            <div id="pic3">
              <a href="http://www.houseofmovementny.com/">
                <img
                  border="0"
                  alt="pic3"
                  src="https://www.theaileyschool.edu/sites/default/files/styles/default_manual_crop/public/school_scholarship_5.jpg?itok=Kqa3iIQW"
                />
              </a>
            </div>
          </div>
          <div id="ubar">
            <div id="ubarcard">
              <input
                type="text"
                placeholder="Name"
                onChange={this.handleSearch} />
              <input
                type="text"
                placeholder="Address"
                onChange={this.handleAddressSearch} />
              <Link to={`/search`}><button type="submit"><img src={Searchicon}></img></button></Link>
            </div>
          </div>
        </div>
        <div id="usercontent">
          <div className="sidebar">
            <div id="box1">
              <div id="sidebarinfo">
                <ul id="ul">
                  <li>
                    <Link to="/Account">Account Summary</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/Security">Security</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/Booking">Booking History</Link>
                  </li>
                  <li>
                    <br />
                    <Link to="/Favorites">Favorites</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/Reviews">Reviews</Link>
                  </li>
                  <br />
                </ul>
              </div>
            </div>
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

export default UserProfile;
