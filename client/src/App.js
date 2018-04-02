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
import MapContainer from './components/Map/MapContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "",
      profile: "",
      searchName: "",
      searchAddress: ""
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

  render() {
    // console.log(this.state.isLoggedIn)
    // console.log(this.state.searchAddress)
    console.log(this.state.searchName)

    return <div>
      <Route exact path="/" render={(props) => <Home handleSearchName={this.handleSearchName} handleSearchAddress={this.handleSearchAddress} isLogged={this.state.isLoggedIn ? true : false} protype={this.state.profile ? "Host" : "User"}{...props} />} />
      <Route exact path="/about" render={(props) => <About isLogged={this.state.isLoggedIn ? true : false} protype={this.state.profile ? "Host" : "User"} {...props} />} />
      <Route exact path="/contact" render={(props) => <Contact isLogged={this.state.isLoggedIn ? true : false} protype={this.state.profile ? "Host" : "User"}{...props} />} />
      <Route exact path="/login" render={(props) => <Login handleLogin={this.handleLogin} {...props} />} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/search" render={(props) => <Search isLogged={this.state.isLoggedIn ? true : false} protype={this.state.profile ? "Host" : "User"} name={this.state.searchName} address={this.state.searchAddress} handleSearchName={this.handleSearchName} handleSearchAddress={this.handleSearchAddress} {...props} />} />
      <Route path='/userprofile' render={(props) => <UserProfile isLogged={this.state.isLoggedIn} {...props} />} />
      <Route path='/hostprofile' render={(props) => <BusProfile isLogged={this.state.isLoggedIn} {...props} />} />
      <Route exact path='/MapContainer' component={MapContainer} />
    </div>;
  }
}

export default App;
