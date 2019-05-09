import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {

    return (
        <div className="navbar">
            <div className="links"> 
                <Link className="links" to="../App/App.js">Home</Link>
            </div>
        </div>
    );
    };
}

export default Navbar;