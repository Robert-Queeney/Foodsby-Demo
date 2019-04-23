import React from 'react'; 

const Header = () => {
    return (
        <div className="main-header">
            <div className="left-menu">
                <img  className="header-image" src="foodsby-logo.jpg" alt="foodsby_image" ></img>
            </div>
            <div className="center menu">
                <a className="menu-item">For Businesses</a>
                <a className="menu-item">For Restaurants</a>
                <a className="menu-item">FAQs</a>
                <a className="menu-item">Contact</a>
            </div>
            <div className="right menu">
                <button className="menu-button">
                    <i className="icon-user">&#9829;</i>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header; 