import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="main-header">
            <div className="left-menu">
                <Link to="/">
                    <img className="header-image" src="https://images.foodsby.com/www/theme/download.png" alt="foodsby logo"></img>
                </Link>
            </div>
            <div className="center menu">
                <a className="menu-item">For Businesses</a>
                <a className="menu-item">For Restaurants</a>
                <a className="menu-item">FAQs</a>
                <a className="menu-item">Contact</a>
            </div>
            <div className="right menu">
                <Link to="/login">
                <button className="menu-button">
                    <i className="icon-user">&#9829;</i>
                    Login
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Header; 