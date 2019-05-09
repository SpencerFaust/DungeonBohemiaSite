import React from 'react';
import {
  HashRouter as Router,
  // Route,
  // Redirect,
  // Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from '../Navbar/Navbar'

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
    </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
