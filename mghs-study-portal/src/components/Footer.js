import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
return (
    <footer className="footer">
        <div className="footer-column">
            <h4>Reach out to MGHS Services</h4>
            <ul>
                <li>Email us at <a href="mailto:info@mghs.com">info@mghs.com</a></li>
                <li><Link to="/contact-form">Contact Form</Link></li>
            </ul>
        </div>
        <div className="footer-column">
            <h4>MGHS Study Portal</h4>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/reflections">Reflections</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
        </div>
    </footer>
);
};

export default Footer;
