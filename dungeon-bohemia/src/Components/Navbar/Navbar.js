import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {

    return (
        <div className="navbar"> 
                <Link className="links" to="../App/App.js">Projects</Link>
                <Link className="links" to="../App/App.js">About</Link>
                <Link className="links" to="../App/App.js">Home</Link>
        </div>
    );
    };
}

export default Navbar;