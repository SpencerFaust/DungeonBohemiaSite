import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
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
        <Switch>
          <Redirect exact from='/' to='/Home' />
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
          </Switch>
      </Router>
    </div>
  );
}

export default App;
