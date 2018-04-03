import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./Search.css";
import Logowhite from "../Images/LogoWhite.png";
import Searchicon from "../Images/Search.png";
import Individual from "./Individual";
import Studios from "./Studios";

import Api from "../Api/Api";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.name,
      address: this.props.address,
      selected: "",
      sort: "",
      date: "",
      room: "",
      time: "",
      comments: "",
      datechose: "",
      roomchose: "",
      commentswritten: "",
      studioSearch: this.props.studioSearch,
      studioarr: this.props.studioarr
    };
  }

  handleSelect = e => {
    this.setState({
      selected: e.target.value
    });
  };

  handleSortSelect = e => {
    this.setState({
      sorted: e.target.value
    });
  };

  handleSearch = e => {
    this.setState({
      input: e.target.value
    });
  };
  handleAddressSearch = e => {
    this.setState({
      address: e.target.value
    });
  };

  handleDateChange = e => {
    this.setState({
      datechose: e.target.value
    });
  };

  handleRoomChange = e => {
    this.setState({
      roomchose: e.target.value
    });
  };

  handleComments = e => {
    this.setState({
      commentswritten: e.target.value
    });
  };

  handleLogout = () => {
    Api.getLogout();
    console.log("You have login!");
  };

  submitAvailiable = e => {
    const { roomchose, datechose } = this.state;
    e.preventDefault();
    this.setState({
      room: roomchose,
      date: datechose
    });
  };

  submitBooking = e => {
    const { room, date, time } = this.state;
    e.preventDefault();
    this.setState({
      time: e.target.name
    });
  };

  submitBookAgain = e => {
    e.preventDefault();
    this.setState({
      time: "",
      room: "",
      date: "",
      comments: ""
    });
  };

  submitComments = e => {
    const { commentswritten } = this.state;
    e.preventDefault();
    this.setState({
      comments: commentswritten
    });
  };

  submitForm = e => {
    e.preventDefault();
    const { input, address, studioarr } = this.state;
    this.props.handleSearchName(input);
    this.props.handleSearchAddress(address);
    var studios = this.props.studioarr.filter(studio =>
      studio.name.toLowerCase().includes(input.toLowerCase())
    );
    this.props.handleStudioSearch(studios);
    this.props.history.push("/search");
  };

  renderSearch = () => {
    const { input, selected, sort, address } = this.state;
    console.log(input);
    console.log(address);
    var array = [];
    if (this.props.studioSearch.join("") === "") {
      array = this.state.studioarr;
    } else {
      array = this.props.studioSearch;
    }
    const categories = ["Select Category", "Dance", "Art", "Photography"];
    const sortby = [
      "Sort By",
      "Highest Rated",
      "Most Reviewed",
      "$-$$$",
      "$$$-$"
    ];
    return <div id="sbacker">
        {this.props.isLogged ? [this.props.protype === "User" ? <div id="topbar">
                <div id="barlogo">
                  <Link to={`/`}>
                    <img src={Logowhite} alt="logo" />
                  </Link>
                </div>
                <Link to={`/login`}>
                  <a class="hoverturn" onClick={this.handleLogout}>
                    <span data-title="Log Out">Log Out</span>
                  </a>
                </Link>
                <Link to={`/userprofile/account`}>
                  <a class="hoverturn">
                    <span data-title="My Account">My Account</span>
                  </a>
                </Link>
              </div> : <div id="topbar">
                <div id="barlogo">
                  <Link to={`/`}>
                    <img src={Logowhite} alt="logo" />
                  </Link>
                </div>
                <Link to={`/login`}>
                  <a class="hoverturn" onClick={this.handleLogout}>
                    <span data-title="Log Out">Log Out</span>
                  </a>
                </Link>
                <Link to={`/hostprofile/account`}>
                  <a class="hoverturn">
                    <span data-title="My Account">My Account</span>
                  </a>
                </Link>
              </div>] : <div id="topbar">
            <div id="barlogo">
              <Link to={`/`}>
                <img src={Logowhite} alt="logo" />
              </Link>
            </div>
            <Link to={`/login`}>
              <a class="hoverturn">
                <span data-title="Log In">Log In</span>
              </a>
            </Link>
            <Link to={`/signup`}>
              <a class="hoverturn">
                <span data-title="Sign Up">Sign Up</span>
              </a>
            </Link>
          </div>}
        <div>
          <div id="sbar">
            <div id="sbarcard">
              <input type="text" placeholder="Name" value={input} onChange={this.handleSearch} />
              <input type="text" placeholder="Address" value={address} onChange={this.handleAddressSearch} />
              <Link to={`/search`}>
                <button type="submit" onClick={this.submitForm}>
                  <img src={Searchicon} alt="icon" />
                </button>
              </Link>
            </div>
          </div>
          <div id="filters">
            <select onChange={this.handleSelect} id="catselect">
              {categories.map(category => (
                <option value={category}>{category}</option>
              ))}
            </select>
            <select onChange={this.handleSortSelect} id="sortselect">
              {sortby.map(sort => <option value={sort}>{sort}</option>)}
            </select>
          </div>
          <div id="listings">
            <Studios bigdiv={"studiodiv"} worddiv={"studioword"} studioarr={array} />
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
      </div>;
  };

  renderIndividual = props => {
    const { name } = props.match.params;
    const {
      input,
      address,
      date,
      room,
      studioarr,
      studioSearch,
      time,
      comments
    } = this.state;
    const dates = [
      "Choose A Date",
      "April 11",
      "April 12",
      "April 13",
      "April 14"
    ];
    const rooms = ["Choose A Room", "Small", "Medium", "Large"];
    const times = ["9:00-10:00", "10:00-11:00", "1:00-2:00", "3:00-4:00"];
    console.log(this.state.datechose, this.state.roomchose);
    return (
      <div>
        <Individual
          name={name}
          isProfile={this.props.protype}
          isInside={this.props.isLogged}
          submitForm={this.state.submitForm}
          input={input}
          inputaddress={address}
          handleAddressSearch={this.handleAddressSearch}
          handleSearch={this.handleSearch}
          rooms={rooms}
          dates={dates}
          times={times}
          handleDateChange={this.handleDateChange}
          handleRoomChange={this.handleRoomChange}
          handleComments={this.handleComments}
          handleLogout={this.handleLogout}
          date={date}
          room={room}
          time={time}
          comments={comments}
          submitAvailiable={this.submitAvailiable}
          submitBooking={this.submitBooking}
          submitBookAgain={this.submitBookAgain}
          submitComments={this.submitComments}
          studioarr={studioarr}
          studioSearch={studioSearch}
        />
      </div>
    );
  };
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/search" render={this.renderSearch} />
          <Route exact path="/search/:name" render={this.renderIndividual} />
        </Switch>
      </div>
    );
  }
}

export default Search;
