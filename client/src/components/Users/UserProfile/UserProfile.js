import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./UserProfile.css";
import Logowhite from "../../Images/LogoWhite.png";
import Logo from "../../Images/Logo.png";
import Searchicon from "../../Images/Search.png";

import Api from "../../Api/Api";

const favorites = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Favorties</h3>
      </div>
    </div>
  )
}

const security = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Security</h3>
      </div>
    </div>
  )
}

const booking = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Booking History</h3>
      </div>
    </div>
  )
}

const account = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Account Summary</h3>
      </div>
    </div>
  )
}

const reviews = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Reviews</h3>
      </div>
    </div>
  )
}

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "",
      name: "",
      profile: ""
    };
  }
  handleLogout = () => {
    Api.getLogout();
    console.log("You have logout!");
    }

  renderUserProfile = () => {
    console.log(this.props.isLogged);
    console.log(this.props.userloggedfname)
    return (
      <div id="upbacker">
        <div id="topbar">
          <Link to={`/login`}>
            <a class="hoverturn" id="userlogout" onClick={this.handleLogout}>
              <span data-title="Log Out">Log Out</span>
            </a>
          </Link>
        </div>
        <div id="topbox">
          <div id="profilelogo">
            <Link to={`/`}>
              <img src={Logowhite} />
            </Link>
          </div>
          <div id="ubar">
            <h3>Welcome User {this.props.userloggedfname} !</h3>
            <div id="ubarcard">
              <Link to={`/search`}>
                <button type="submit">
                  <img src={Searchicon} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div id="usercontent">
          <div className="sidebar">
            <div id="box1">
              <div id="sidebarinfo">
                <ul id="ul">
                  <li>
                    <Link to="/userprofile/account">Account Summary</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/userprofile/security">Security</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/userprofile/booking">Booking History</Link>
                  </li>
                  <li>
                    <br />
                    <Link to="/userprofile/favorites">Favorites</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/userprofile/reviews">Reviews</Link>
                  </li>
                  <br />
                </ul>
              </div>
              <Route exact path="/userprofile/account" component={account} />
              <Route exact path="/userprofile/favorites" component={favorites} />
              <Route exact path="/userprofile/booking" component={booking} />
              <Route exact path="/userprofile/reviews" component={reviews} />
              <Route exact path="/userprofile/security" component={security} />
            </div>
          </div>
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
      </div>
    );
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/userprofile" render={this.renderUserProfile} />
        </Switch>
      </div>
    );
  }
}

export default UserProfile;
