import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./UserProfile.css";
import Logowhite from "../../Images/LogoWhite.png";
import Logo from "../../Images/Logo.png";
import Searchicon from "../../Images/Search.png";

import Api from "../../Api/Api";

const Favorites = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Favorties</h3>
        <br/> <strong>My Ultimate Studios: </strong>
         <br/>
          <ul>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: It was great, the studio was prepared and ready for me. 
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br/>
            <li><strong>Dance Dance</strong>
              <br/>
              4 Stars: John was great to work with and friendly
            </li>
            <br/>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: John was a pleasure and left the studio in great shape.
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              3 Stars: John overstayed but danced great
            </li>
            <br/>
            <li><strong>Dance Dance</strong>
              <br/>
              4 Stars: John was great to work with and friendly
            </li>
            <br/>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: It was great, the studio was prepared and ready for me. 
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br/>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: It was great, the studio was prepared and ready for me. 
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br/>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: It was great, the studio was prepared and ready for me. 
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br/>
          </ul>

      </div>
    </div>
  )
}

const Security = e => {
  return (
  <div class="rightdiv">
  <div class="profileheads">
  <h3>Edit Profile</h3>
  <br />First Name{" "} <input type="text" className="inputs" />
  <br />
  <br />Last Name <input type="text" className="inputs" />
  <br />
  <br />I Am{" "}<select>
  <option>female</option>
  <option>male</option>
  <option>other</option>
  <br />
  </select>
  <br />
  <br />
  Birthday{" "}
  <br /> <input type="date" name="bday" />
  <br />
  <br />Email Address {" "}{" "}<input type="text" className="inputs" />
  <br />
  <br />Phone Number {" "}{" "}<input type="text" className="inputs" />
  <br />
  <br />Where You Live{" "}{" "}<input type="text" className="inputs" />
  <br/>
  <br />Describe Yourself{" "}
  <br/>
  <br /><textarea id ="textarea">Tell us about you</textarea>
  </div>
  </div>
  );
  };

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
              <td>Date</td>
              <td>Time</td>
              <td>Total</td>
            </tr>
            <tr>
              <td>{booking.booking_date}</td>
              <td>{booking.booking_time}</td>
              <td>{booking.total}</td>
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
        <p><strong>Welcome, John!</strong>
        <br/>
         <br/> <strong>Username:</strong> JohnLopez 
         <br/>
         <br/> <strong>Password:</strong> *******
         <br/>
         <br/> <strong>Last Login:</strong> Tuesday, 10:26pm
         <br/>
         <br/>
         <strong>Activity:</strong> Today 11/2/2018, booked Champions Studio for 1 hour
         <br/>
         <br/><strong>Upmcoming:</strong> Friday 11/5/2018, booked Fred Astaire Studio for 2 hours
         <br/>
         <br/> <strong>Reviews of John: </strong>
         <br/>
          <ul>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: John was a pleasure and left the studio in great shape.
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              3 Stars: John overstayed but danced great
            </li>
            <br/>
            <li><strong>Dance Dance</strong>
              <br/>
              4 Stars: John was great to work with and friendly
            </li>
            <br/>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: John was a pleasure and left the studio in great shape.
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              3 Stars: John overstayed but danced great
            </li>
            <br/>
            <li><strong>Dance Dance</strong>
              <br/>
              4 Stars: John was great to work with and friendly
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

const Reviews = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Reviews</h3>
        <br/> <strong>John's Studio Reviews: </strong>
         <br/>
          <ul>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: It was great, the studio was prepared and ready for me. 
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br/>
            <li><strong>Dance Dance</strong>
              <br/>
              4 Stars: John was great to work with and friendly
            </li>
            <br/>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: John was a pleasure and left the studio in great shape.
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              3 Stars: John overstayed but danced great
            </li>
            <br/>
            <li><strong>Dance Dance</strong>
              <br/>
              4 Stars: John was great to work with and friendly
            </li>
            <br/>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: It was great, the studio was prepared and ready for me. 
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br/>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: It was great, the studio was prepared and ready for me. 
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br/>
            <li><strong>Penthouse: </strong>
              <br/>
              5 Stars: It was great, the studio was prepared and ready for me. 
            </li>
            <br/>
            <li><strong>Mercury</strong>
              <br/>
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br/>
          </ul>

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
      profile: "",
      bookings: [],
    };
  }

  componentWillMount() {
    this.props.handleLoginInfo(this.props.isLogged);
    this.props.handleUserBookingInfo(this.props.userloggedid)
  }

  handleLogout = () => {
    Api.getLogout();
    console.log("You have logout!");
  }

  renderUserProfile = () => {
    console.log(this.props.isLogged);
    console.log(this.props.userloggedid)

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
              <Route exact path="/userprofile/account" component={() => <Account />} />
              <Route exact path="/userprofile/favorites" component={() => <Favorites />} />
              <Route exact path="/userprofile/booking" component={() => <Booking bookings={this.props.userbookings} />} />
              <Route exact path="/userprofile/reviews" component={() => <Reviews />} />
              <Route exact path="/userprofile/security" component={() => <Security />} />
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
