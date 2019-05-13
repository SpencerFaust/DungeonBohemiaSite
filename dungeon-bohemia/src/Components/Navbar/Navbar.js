import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import icon from '../../Images/Menu.png';

class Navbar extends Component {
    render() {

    return (

        
        <div class="navbar">
            <div class="dropdown">
                <button class="dropbtn">
                    <img alt="menu button" src={icon} id="menu-button" />   
                </button>
                <div class="dropdown-content">
                    <Link className="links" to="../Projects">Projects</Link>
                    <Link className="links" to="../About">About</Link>
                    <Link className="links" to="../Home">Home</Link> 
                </div>
            </div> 
        </div>
    );
    };
}

export default Navbar;