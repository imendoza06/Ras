import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Sign/LogIn/LogIn';
import Signup from './components/Sign/SignUp/SignUp';

class App extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' component ={Home} />
        <Route exact path='/about' component ={About} />
        <Route exact path='/contact' component ={Contact} />
        <Route exact path='/login' component ={Login} />
        <Route exact path='/signup' component ={Signup} />
      </div>
    );
  }
}

export default App;
