import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./BusinessProfile.css";
import Logowhite from "../../Images/LogoWhite.png";
import Logo from "../../Images/Logo.png";
import Searchicon from "../../Images/Search.png";
import Test from "../../Images/Test3.jpeg"
import AddBusiness from "./AddBusiness"

import Api from "../../Api/Api"

const Studios = ({ studios }) => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Studios</h3>
      </div>
      <div class="bookingcontent">
        {studios.map(studio => (
          <div class="bookinglist">
            <h3>{studio.organization_name}</h3>
            <table>
              <tr class="bookingsubs">
                <td colspan="4" >About</td>
              </tr>
              <tr>
                <td colspan="4">{studio.about}</td>
              </tr>
              <tr class="bookingsubs">
                <td colspan="4" >Description</td>
              </tr>
              <tr>
                <td colspan="4">{studio.description_summary}</td>
              </tr>
              <tr class="bookingsubs">
                <td>Address</td>
                <td>City</td>
                <td>State</td>
                <td>Zip code</td>
              </tr>
              <tr>
                <td>{studio.address_line_1}</td>
                <td>{studio.city}</td>
                <td>{studio.state}</td>
                <td>{studio.zip_code}</td>
              </tr>
              <tr class="bookingsubs">
                <td colspan="2">Hours</td>
                <td colspan="2">Price Per Hour</td>
              </tr>
              <tr>
                <td colspan="2">{studio.hour}</td>
                <td colspan="2">{studio.price}</td>
              </tr>
              <tr class="bookingsubs">
                <td colspan="2">Amenities</td>
                <td colspan="2">Rules</td>
              </tr>
              <tr>
                <td colspan="2">{studio.amenities}</td>
                <td colspan="2">{studio.rules}</td>
              </tr>
            </table>
          </div>
        ))}
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
      bookings: [],
      studios: []
    }
  };

  handleLogout = () => {
    Api.getLogout();
    console.log("You have logout!")
  }

  handleStudios = id => {
    Api.getStudiosByUser(id)
      .then(response => {
        console.log("Response: ", response);
        console.log("Response Data: ", response.data);
        this.setState({
          studios: response.data.data,
        });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };

  componentWillMount() {
    this.props.handleLoginInfo(this.props.isLogged);
    this.props.handleHostBookingInfo(this.props.userloggedid)
    this.handleStudios(this.props.userloggedid)
  }


  renderBusProfile = () => {
    console.log(this.props.isLogged)
    console.log(this.state.bookings)
    console.log(this.state.studios)
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
              <Route exact path="/hostprofile/studios" component={() => <Studios studios={this.state.studios} />} />
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