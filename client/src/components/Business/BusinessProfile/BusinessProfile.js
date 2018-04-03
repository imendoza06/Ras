import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./BusinessProfile.css";
import Logowhite from "../../Images/LogoWhite.png";
import Logo from "../../Images/Logo.png";
import Searchicon from "../../Images/Search.png";
import Test from "../../Images/Test3.jpeg"
import AddBusiness from "./AddBusiness"


const studios = e => {
  return (
    <div class="rightdiv">
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

const security = e => {
  return (
    <div class="rightdiv">
      <h1>Security</h1>
    </div>
  )
}

const booking = e => {
  return (
    <div class="rightdiv">
      <h1>Bookings</h1>
    </div>
  )
}

const account = e => {
  return (
    <div class="rightdiv">
      <h1>Account</h1>
    </div>
  )
}

const reviews = e => {
  return (
    <div class="rightdiv">
      <h1>Reviews</h1>
    </div>
  )
}

class BusProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: ""
    }
  };


  renderBusProfile = () => {
    console.log(this.props.isLogged)
    return (
      <div id="hpbacker">
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
        <div id="htopbox">
          <div id="hbar">
            <h3>Welcome To Your Profile Host {this.props.isLogged} !</h3>
            <div id="hbarcard">
              <Link to={`/hostprofile/add`}>+Add A Studio</Link>
              <Link to={`/search`}><button type="submit"><img src={Searchicon}></img></button></Link>
            </div>
          </div>
        </div>
        <div id="hostcontent">
          <div className="sidebar">
            <div id="box1">
              <div id="sidebarinfo">
                <ul id="ul">
                  <li>
                    <Link to="/hostprofile/account">Account Summary</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/hostprofile/studios">Studios</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/hostprofile/booking">Booking History</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/hostprofile/reviews">Reviews</Link>
                  </li>
                  <br />
                  <li>
                    <Link to="/hostprofile/security">Security</Link>
                  </li>
                  <br />
                </ul>
              </div>
              <Route exact path="/hostprofile/account" component={account} />
              <Route exact path="/hostprofile/studios" component={studios} />
              <Route exact path="/hostprofile/booking" component={booking} />
              <Route exact path="/hostprofile/reviews" component={reviews} />
              <Route exact path="/hostprofile/security" component={security} />
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

  render() {
    return (
      <div>
        <Switch>
          <Route path="/hostprofile" render={this.renderBusProfile} />
        </Switch>
      </div>
    );
  }

}

export default BusProfile;