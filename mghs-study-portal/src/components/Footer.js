import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
return (
    <footer className="footer">
        <div className="footer-column">
            <h2>Reach out to MGHS Services</h2>
            <ul>
                <li>Email us at <a href="mailto:info@mghs.com">info@mghs.com</a></li>
                <li>Our Website: <a href='https://themghs.com/'>MGHS</a></li>
                {/*<li><Link to="/contact-form">Contact Form</Link></li>*/}
            </ul>
        </div>
        <div className="footer-column">
            <h2>MGHS Study Portal</h2>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/reflections">Reflections</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
        </div>
    </footer>
);
};

export default Footer;
