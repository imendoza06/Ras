import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Sign/LogIn/LogIn';
import Signup from './components/Sign/SignUp/SignUp';
import Search from './components/Search/Search';
import UserProfile from './components/Users/UserProfile/UserProfile';
import BusProfile from './components/Business/BusinessProfile/BusinessProfile';
import BusProfileAdd from './components/Business/BusinessProfile/AddBusiness';
import MapContainer from './components/Map/MapContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "",
      profile: "",
      searchName: "",
      searchAddress: "",
      studioSearch: [],
      studioarr: [
        {
          id: "1",
          name: "The Realist Studio",
          description: "Best In LA",
          about: "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Los Angelos, California",
          price: "$45",
          dimensions: "600 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        },
        {
          id: "2",
          name: "Broadway Dance",
          description: "Best In NY",
          about: "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "New York, New York",
          price: "$50",
          dimensions: "700 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        },
        {
          id: "3",
          name: "Pearl Studio",
          description: "Pearlss",
          about: "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Brookyln",
          price: "$60",
          dimensions: "800 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        },
        {
          id: "4",
          name: "Roman Studio",
          description: "Best In LA",
          about: "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Los Angelos, California",
          price: "$45",
          dimensions: "600 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        },
        {
          id: "5",
          name: "DNCY",
          description: "Best In LA",
          about: "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Los Angelos, California",
          price: "$45",
          dimensions: "600 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        },
        {
          id: "6",
          name: "Common Dance Studio",
          description: "Best In LA",
          about: "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Los Angelos, California",
          price: "$45",
          dimensions: "600 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        },
        {
          id: "7",
          name: "Mumba",
          description: "Best In LA",
          about: "wadawdawdawdaawdawdawdawdiuwbfiuanefiuaenfiuaenfaiuenfiuaeaiuenfiueanfiauenfiauesnfiuenfsaiunefise",
          address: "Los Angelos, California",
          price: "$45",
          dimensions: "600 by 500",
          amenities: "elevator, wifi",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        },]
    }
  };

  handleLogin = (login, profile) => {
    this.setState({
      isLoggedIn: login,
      profile: profile,
    })
  }

  handleSearchName = (name) => {
    this.setState({
      searchName: name
    })
  }

  handleSearchAddress = (address) => {
    this.setState({
      searchAddress: address
    })
  }

  handleStudioSearch = (studio) => {
    this.setState({
      studioSearch: studio
    })
  }


  render() {
    // console.log(this.state.isLoggedIn)
    // console.log(this.state.searchAddress)
    console.log(this.state.studioSearch)

    return <div>
      <Route exact path="/" render={(props) => <Home handleStudioSearch={this.handleStudioSearch} handleSearchName={this.handleSearchName} handleSearchAddress={this.handleSearchAddress} studioarr={this.state.studioarr} studioSearch={this.state.studioSearch} isLogged={this.state.isLoggedIn ? true : false} protype={this.state.profile ? "Host" : "User"}{...props} />} />
      <Route exact path="/about" render={(props) => <About isLogged={this.state.isLoggedIn ? true : false} protype={this.state.profile ? "Host" : "User"} {...props} />} />
      <Route exact path="/contact" render={(props) => <Contact isLogged={this.state.isLoggedIn ? true : false} protype={this.state.profile ? "Host" : "User"}{...props} />} />
      <Route exact path="/login" render={(props) => <Login handleLogin={this.handleLogin} {...props} />} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/search" render={(props) => <Search handleStudioSearch={this.handleStudioSearch} studioarr={this.state.studioarr} studioSearch={this.state.studioSearch} isLogged={this.state.isLoggedIn ? true : false} protype={this.state.profile ? "Host" : "User"} name={this.state.searchName} address={this.state.searchAddress} handleSearchName={this.handleSearchName} handleSearchAddress={this.handleSearchAddress} {...props} />} />
      <Route path='/userprofile' render={(props) => <UserProfile isLogged={this.state.isLoggedIn} {...props} />} />
      <Route path='/hostprofile' render={(props) => <BusProfile isLogged={this.state.isLoggedIn} {...props} />} />
      <Route exact path='/MapContainer' component={MapContainer} />
      <Route exact path='/add' component={BusProfileAdd} />
    </div>;
  }
}

export default App;
