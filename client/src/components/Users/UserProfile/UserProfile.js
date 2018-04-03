import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./UserProfile.css";
import Logowhite from "../../Images/LogoWhite.png";
import Logo from "../../Images/Logo.png";
import Searchicon from "../../Images/Search.png";
import Test from "../../Images/Test.jpg"
import Account from './Account';

const studios = e => {
  return (
    <div class="studios_table">
      <table>
        <tr>
          <th>Studio Name</th>
          <th>Price</th>
          <th>Locations</th>
        </tr>
        <tr>
          <td><Link to={`studio/profile`}>Salsa Salsa Dance Studio</Link></td>
          <td>$100</td>
          <td>Williamburg,Brooklyn</td>
        </tr>
      </table>
    </div>
  )
}

const manageStudio = e => {
  return (
    <div>
      <h1>Manage Studio</h1>
    </div>
  )
}

const bookings = e => {
  return (
    <div>
      <h1>Bookings</h1>
    </div>
  )
}

const account = e => {
  return (
    <div>
      <h1>Account</h1>
    </div>
  )
}

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "",
      name:"",
      profile:""
    }
  };


  renderUserProfile = () => {
    console.log(this.props.isLogged)
    return (
      <div id="upbacker">
        <div id="topbar">
          <div id="barlogo">
            <Link to={`/`}>
              <img src={Logo} />
            </Link>
          </div>
          <Link to={`/login`}>
            <a class="hoverturn" id="userlogout">
              <span data-title="Log Out">Log Out</span>
            </a>
          </Link>
        </div>
        <div id="topbox">
          <div id="ubar">
            <h3>Welcome To Your Profile {this.props.isLogged} !</h3>
            <div id="ubarcard">
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
              <Route exact path="/hostprofile/account" component={account} />
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

  renderAccount = props => {
    return (
      <div>
        <Account />
      </div>
    );
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/userprofile" render={this.renderUserProfile} />
          <Route path="/userprofile/account" render={this.renderAccount} />
        </Switch>
      </div>
    );
  }

}

export default UserProfile;
