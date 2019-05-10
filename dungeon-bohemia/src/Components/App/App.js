import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  // Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from '../Navbar/Navbar'

//Importing other components in order to set up their routes.
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';

function App() {
  return (
    <div className="App">
    <Router>
        <Navbar />
      {/* <Redirect exact from='/' to='/home' /> */}
      <Route
        path="/About"
        component={About}
        />
      <Route
        path="/Projects"
        component={Projects}
        />
      <Route
        path="/Home"
        component={Home}
        />
    </Router>
    </div>
  );
}

export default App;
