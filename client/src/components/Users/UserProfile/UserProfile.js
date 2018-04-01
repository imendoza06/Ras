import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./UserProfile.css";
import Logowhite from "../../Images/LogoWhite.png";
import Searchicon from "../../Images/Search.png";

const UserProfile = () => (

  <Router>
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
              <Route exact path="/Account" component={Account} />
              <Route exact path="/Security" component={Security} />
              <Route exact path="/Booking" component={Booking} />
              <Route exact path="/Favorites" component={Favorites} />
              <Route exact path="/Reviews" component={Reviews} />
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
  </Router>
);

const Account = () => (
  <div className="rightbox">
    <h3>Account Summary</h3>
    <p className="infobox">
      <br />Name: John Doe <br />
      <br />Email: johndoe@gmail.com <br />
      <br />Cell: 123 455 6789
    </p>
  </div>
);

const Security = () => (
  <div className="rightbox">
    <h3>Security</h3>
    <p className="infobox">
      <br /> Username: John Doe <br />
      <br />Password: password123 <br />
      <br />Security Qeustions: What is your favorite color?
    </p>
  </div>
);

const Booking = () => (
  <div className="rightbox">
    <h3>Booking</h3>
    <p className="infobox">
      <br />Active Bookings: None<br />
      <br />Pending Bookings: DANCE STUDIO A<br />
      <br />Past Bookings: B DANCE Studio
    </p>
  </div>
);

const Favorites = () => (
  <div className="rightbox">
    <h3>Favorites</h3>
    <p className="infobox">
      <br />MY FAVORITES LIST: <br />
      <br />1. Rainbow Unicorn DANCE Studioz <br />
      <br />2. Sushi Dance Studio<br />
      <br />3. Hella Good Dance Studio
    </p>
  </div>
);

const Reviews = () => (
  <div className="rightbox">
    <h3>Reviews</h3>
    <p className="infobox">
      <br />Hella Good Dance Studio:<br />
      <br />OMG it was great.<br />
      <br />I danced like no one was watching.
    </p>gi
  </div>
);

// handleSearch = e => {
//   this.setState({
//     search: e.target.value
//   })
// }

const Search = () => (
  <div>
    <input id="inputz"
      type="text"
      name="Search"
      placeholder="Find A Studio"
    // value={Search}
    // onchange={this.handleSearch}
    />
  </div>
)

export default UserProfile;
