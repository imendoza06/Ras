import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./BusinessProfile.css";
import Logowhite from "../../Images/LogoWhite.png";
import Logo from "../../Images/Logo.png";
import Searchicon from "../../Images/Search.png";
import Test from "../../Images/Test3.jpeg"
import AddBusiness from "./AddBusiness"

import Api from "../../Api/Api"

const Studios = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Studios</h3>
      </div>
    </div>
  )
}

const Security = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Security</h3>
      </div>
    </div>
  )
}

const Booking = ({ bookings }) => {
  console.log(bookings)
  console.log(bookings[0].first_name)
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Booking History</h3>
      </div>
      <div class="bookingcontent">
        {bookings.map(booking => (
          <div class="bookinglist">
            <h3>{booking.room_name}</h3>
            <table>
              <tr class="bookingsubs">
                <td>Booker Name</td>
                <td>Date</td>
                <td>Time</td>
                <td>Total</td>
                <td>Comments</td>
              </tr>
              <tr>
                <td>{booking.first_name} {booking.last_name}</td>
                <td>{booking.booking_date}</td>
                <td>{booking.booking_time}</td>
                <td>{booking.total}</td>
                <td></td>
              </tr>
            </table>

          </div>
        ))}
      </div>
    </div>
  )
}

const Account = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Account Summary</h3>
      </div>
    </div>
  )
}

const Reviews = e => {
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
      isLoggedIn: "",
      bookings: []
    }
  };

  handleLogout = () => {
    Api.getLogout();
    console.log("You have logout!")
  }

  componentDidMount() {
    this.props.handleHostBookingInfo(this.props.userloggedid)
    this.props.handleLoginInfo(this.props.isLogged);
  }

  renderBusProfile = () => {
    console.log(this.props.isLogged)
    console.log(this.state.bookings)
    return (
      <div id="hpbacker">
        <div id="topbar">
          <Link to={`/login`}>
            <a class="hoverturn" id="userlogout" onClick={this.handleLogout}>
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
            <h3>Welcome Host {this.props.userloggedfname} !</h3>
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
              <Route exact path="/hostprofile/account" component={() => <Account />} />
              <Route exact path="/hostprofile/studios" component={() => <Studios />} />
              <Route exact path="/hostprofile/booking" component={() => <Booking bookings={this.props.hostbookings} />} />
              <Route exact path="/hostprofile/reviews" component={() => <Reviews />} />
              <Route exact path="/hostprofile/security" component={() => <Security />} />
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