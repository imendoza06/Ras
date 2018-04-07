import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./UserProfile.css";
import Logowhite from "../../Images/LogoWhite.png";
import Logo from "../../Images/Logo.png";
import Searchicon from "../../Images/Search.png";
import Deborah_image from "../../Images/Deborah_image.jpeg";

import Api from "../../Api/Api";

const Account = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Account Summary</h3>
        <img id="deborah" src={Deborah_image} />
        <p>
          <div id="welcome">
            <strong>Welcome, Deborah!</strong>
          </div>
          <br />
          <div id="profilebox">
            <h3 className="h3divs">User Information</h3>
            <br />
            <strong>Username:</strong> DeborahSmith123
            <br />
            <br /> <strong>Password:</strong> *******
            <br />
            <br /> <strong>Last Login:</strong> Tuesday, 10:26pm
            <br />
            <br />
            <strong>Activity:</strong> Today 4/11/2018, booked Champions Studio
            for 1 hour at 2:00 pm
            <br />
            <br />
            <strong>Upmcoming:</strong> Friday 5/5/2018, booked Fred Astaire
            Studio for 2 hours at 5:00 pm
          </div>
          <br />
          <div id="bottombox">
            <br />
            <h3 className="h3divs">
              {" "}
              <strong>Reviews of Deborah: </strong>
            </h3>
            <br />
            <ul>
              <li>
                <strong>Champions: </strong>
                <br />
                5 Stars: Deborah was a pleasure and left the studio in great
                shape.
              </li>
              <br />
              <li>
                <strong>Ripley's Dance</strong>
                <br />
                3 Stars: Deborah overstayed but danced great
              </li>
              <br />
              <li>
                <strong>Empire Dance Studio</strong>
                <br />
                4 Stars: Deborah was great to work with and friendly
              </li>
              <br />
              <li>
                <strong>Penthouse: </strong>
                <br />
                5 Stars: Deborah was a pleasure and left the studio in great
                shape.
              </li>
              <br />
              <li>
                <strong>Mercury</strong>
                <br />
                3 Stars: She overstayed but danced great
              </li>
              <br />
              <li>
                <strong>Dance Dance</strong>
                <br />
                4 Stars: Deborah was great to work with and friendly
              </li>
            </ul>
          </div>
        </p>
      </div>
    </div>
  );
};
const Settings = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Settings</h3>
        <div id="editprofile">
          <h3 className="h3divs">Edit Profile</h3>
          <br />First Name <input type="text" className="inputs" />
          <br />
          <br />Last Name <input type="text" className="inputs" />
          <br />
          <br />I Am{" "}
          <select>
            <option>female</option>
            <option>male</option>
            <option>other</option>
            <br />
          </select>
          <br />
          <br />
          Birthday <br /> <input type="date" name="bday" />
          <br />
          <br />Email Address <input type="text" className="inputs" />
          <br />
          <br />Phone Number <input type="text" className="inputs" />
          <br />
          <br />Where You Live <input type="text" className="inputs" />
          <br />
          <br />Describe Yourself <br />
          <br />
          <textarea id="textarea">Tell us about you!</textarea>
        </div>
      </div>
    </div>
  );
};

const Booking = ({ bookings }) => {
  console.log(bookings);
  console.log(bookings[0].first_name);
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
  );
};

const Favorites = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Favorties</h3>
        <div id="favorites">
          <h3 className="h3divs">
            <strong>My Ultimate Studios </strong>
          </h3>
          <ul>
            <li>
              <strong>Empire Rehearsal: </strong>
              <br />
              5 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Ripley-Grier Studios</strong>
              <br />
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br />
            <li>
              <strong>Brooklyn Studios For Dance</strong>
              <br />
              4 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Millennium Dance Complex </strong>
              <br />
              5 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Worldwide Premiere Studio</strong>
              <br />
              3 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Dance Dance</strong>
              <br />
              4 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Fred Astaire Dance </strong>
              <br />
              5 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Sessions Dance</strong>
              <br />
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br />
            <li>
              <strong>Rainbow Dancers </strong>
              <br />
              5 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Mercury</strong>
              <br />
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br />
            <li>
              <strong>Empire Rehearsal </strong>
              <br />
              5 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Champions</strong>
              <br />
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
};

const Reviews = e => {
  return (
    <div class="rightdiv">
      <div class="profileheads">
        <h3>Reviews</h3>
        <div id="reviews">
          <h3 className="h3divs">
            <strong>Deborah's Studio Reviews </strong>
          </h3>
          <ul>
            <li>
              <strong>Penthouse: </strong>
              <br />
              5 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Mercury</strong>
              <br />
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br />
            <li>
              <strong>Dance Dance</strong>
              <br />
              4 Stars: Deborah was great to work with and friendly
            </li>
            <br />
            <li>
              <strong>Penthouse: </strong>
              <br />
              5 Stars: Deborah was a pleasure and left the studio in great
              shape.
            </li>
            <br />
            <li>
              <strong>Mercury</strong>
              <br />
              3 Stars: Deborah overstayed but danced great
            </li>
            <br />
            <li>
              <strong>Dance Dance</strong>
              <br />
              4 Stars: Deborah was great to work with and friendly
            </li>
            <br />
            <li>
              <strong>Penthouse: </strong>
              <br />
              5 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Mercury</strong>
              <br />
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br />
            <li>
              <strong>Penthouse: </strong>
              <br />
              5 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Mercury</strong>
              <br />
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br />
            <li>
              <strong>Penthouse: </strong>
              <br />
              5 Stars: It was great, the studio was prepared and ready for me.
            </li>
            <br />
            <li>
              <strong>Mercury</strong>
              <br />
              1 Stars: The studio smelled like cheese and cats! No bueno.
            </li>
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
};

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "",
      name: "",
      profile: "",
      bookings: []
    };
  }

  componentWillMount() {
    this.props.handleLoginInfo(this.props.isLogged);
    this.props.handleUserBookingInfo(this.props.userloggedid);
  }

  handleLogout = () => {
    Api.getLogout();
    console.log("You have logout!");
  };

  renderUserProfile = () => {
    console.log(this.props.isLogged);
    console.log(this.props.userloggedid);

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
                    <Link to="/userprofile/settings">Settings</Link>
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
              <Route
                exact
                path="/userprofile/account"
                component={() => <Account />}
              />
              <Route
                exact
                path="/userprofile/favorites"
                component={() => <Favorites />}
              />
              <Route
                exact
                path="/userprofile/booking"
                component={() => <Booking bookings={this.props.userbookings} />}
              />
              <Route
                exact
                path="/userprofile/reviews"
                component={() => <Reviews />}
              />
              <Route
                exact
                path="/userprofile/settings"
                component={() => <Settings />}
              />
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
