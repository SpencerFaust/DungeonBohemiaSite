import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {

    return (
        <div className="navbar"> 
                <Link className="links" to="../Projects">Projects</Link>
                <Link className="links" to="../About">About</Link>
                <Link className="links" to="../Home">Home</Link>
        </div>
    );
    };
}

export default Navbar;