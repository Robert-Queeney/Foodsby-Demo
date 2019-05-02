import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return <div className="footer">
        <div className="footer-internal-nav">
            <div className="empty">
            </div>
            <div className="footer-nav">
                <Link to="/login">Contact Us</Link> <Link to="/login">Restaurant</Link> <Link to="/login">Login</Link> <Link to="/login">Terms of Service</Link> <Link to="/login">Privacy Policy</Link> <Link to="/login">Ad Choices</Link> <Link to="/login">Careers</Link>
            </div>
            <div className="footer-scroll">
                <button className="scroll-button" onClick={scrollToTop}>Scroll to Top</button>
            </div>
        </div>
        <div className="footer-external">
        <div className="footer-external-nav">
            <a href="http://itunes.apple.com" rel="noopener noreferrer" target="_blank"><img height="42" width="140" src="https://images.foodsby.com/www/theme/icon-app-store.png" alt="itunes" /></a>
            <a href="http://play.google.com" rel="noopener noreferrer" target="_blank"><img height="42" width="140" src="https://images.foodsby.com/www/theme/icon-google-play.png" alt="itunes" /></a>
            </div>
        </div>
    </div>
}

export default Footer; 