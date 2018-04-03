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
      <div class="profileheads">
        <h3>Studios</h3>
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
          <Link to={`/login`}>
            <a class="hoverturn" id="userlogout">
              <span data-title="Log Out">Log Out</span>
            </a>
          </Link>
        </div>
        <div id="htopbox">
          <div id="profilelogo">
            <Link to={`/`}>
              <img src={Logowhite} />
            </Link>
          </div>
          <div id="hbar">
            <h3>Welcome Host {this.props.isLogged} !</h3>
            <div id="hbarcard">
              <Link to={`/add`}>+Add A Studio</Link>
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