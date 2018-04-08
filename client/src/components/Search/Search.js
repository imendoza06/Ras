import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./Search.css";
import Logowhite from "../Images/LogoWhite.png";
import Searchicon from "../Images/Search.png";
import Individual from "./Individual";
import Studios from "./Studios";

import axios from "axios";
import Api from "../Api/Api";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: this.props.name,
            address: this.props.address,
            userloggedid: this.props.userloggedid,
            selected: "",
            sort: "",
            date: "",
            room: "",
            time: "",
            comments: "",
            isBooked: false,
            message: "",
            datechose: "",
            roomchose: "",
            roomtimes: "",
            commentswritten: "",
            studioSearch: this.props.studioSearch,
            studioarr: this.props.studioarr,
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
        this.props.handleRoomInfo(roomchose)
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
        this.postRequestBooking();
    };
    
    postRequestBooking = () => {
        const { room, date, time, commentswritten } = this.state;
        
            axios
          .post("/api/newbooking", {
            roomID: this.props.roomid,
            room: room,
            bookingDate: date,
            bookingTime: time,
            price: this.props.studioprice,
            total: this.props.studioprice,
            userID: this.props.userloggedid,
            hostID: this.props.hostid
          })
          .then(res => {
            this.setState({
              isBooked: true,
              comments: commentswritten,
              message: "Booked a Room!"
            });
          })
          .catch(err => {
            this.setState({
              isBooked: false,
              message: "Error Booking a Room!"
            });
          });
    }

    submitForm = e => {
        e.preventDefault();
        const { input, address, studioarr } = this.state;
        this.props.handleSearchName(input);
        this.props.handleSearchAddress(address);
        var studios = this.props.studioarr.filter(studio =>
            studio.organization_name.toLowerCase().includes(input.toLowerCase())
        );
        this.props.handleStudioSearch(studios);
        this.props.history.push("/search");
    };

    renderSearch = () => {
        const { input, selected, sort, address } = this.state;
        console.log(input);
        console.log(address);
        console.log(this.props.userloggedid)
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
        const { id } = props.match.params;
        this.props.handleSingleStudio(id);
        const {
            input,
            address,
            date,
            room,
            studioarr,
            studioSearch,
            time,
            comments,
        } = this.state;
        console.log(room, date);
        const dates = [
            "Choose A Day",
            "April 11",
            "April 12",
            "April 13",
            "April 14",
            "April 15",
            "April 16",
            "April 17",
        ];
        var timearr = [];
        if (this.state.datechose.includes("11")) {
            timearr = this.props.wednesday
        }
        if (this.state.datechose.includes("12")) {
            timearr = this.props.thursday
        }
        if (this.state.datechose.includes("13")) {
            timearr = this.props.friday
        }
        if (this.state.datechose.includes("14")) {
            timearr = this.props.saturday
        }
        if (this.state.datechose.includes("15")) {
            timearr = this.props.sunday
        }
        if (this.state.datechose.includes("16")) {
            timearr = this.props.monday
        }
        if (this.state.datechose.includes("17")) {
            timearr = this.props.tuesday
        }
        console.log(timearr)
        return (
            <div>
                <Individual
                    name={this.props.studioname}
                    isProfile={this.props.protype}
                    isInside={this.props.isLogged}
                    submitForm={this.state.submitForm}
                    input={input}
                    inputaddress={address}
                    handleAddressSearch={this.handleAddressSearch}
                    handleSearch={this.handleSearch}
                    rooms={this.props.studioroomsname}
                    dates={dates}
                    times={timearr}
                    handleDateChange={this.handleDateChange}
                    handleRoomChange={this.handleRoomChange}
                    handleComments={this.handleComments}
                    handleLogout={this.handleLogout}
                    date={date}
                    room={room}
                    time={time}
                    comments={comments}
                    rules={this.props.rules}
                    about={this.props.studioabout}
                    description={this.props.studiodescription}
                    address={this.props.studiocity}
                    state={this.props.studiostate}
                    hours={this.props.studiohours}
                    price={this.props.studioprice}
                    amenities={this.props.amenities}
                    image={this.props.studioimage}
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
                    <Route exact path="/search/:id" render={this.renderIndividual} />
                </Switch>
            </div>
        );
    }
}

export default Search;
