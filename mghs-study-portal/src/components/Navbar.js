import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false); // Toggle sidebar

    const [isLoggedIn, setIsLoggedIn] = useState(true); // Toggle navbar visibility

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close sidebar when a link is clicked
    };


    const handleLogoutClick = () => {
        localStorage.clear();
        
        // return the below code to functionality when you
        // find a method to accesss the local storae
        //setIsLoggedIn(false)

    } // logout from the system; delete localSession Variables; keep it simple; nothing fancy

    const isAdmin = localStorage.getItem("is_admin");

return (
    <nav className='navbar'>
        <div className="navbar-header">
            <button className="nav-toggle" onClick={toggleSidebar}>
                ☰ {/* Hamburger icon */}
            </button>
            {/* add mghs logo */}
            <h3>MGHS Study Portal</h3>
        </div>
        

        
        {isLoggedIn ? (

        
        <ul className={`nav-list ${isOpen ? 'open' : 'closed'}`}>

            <li><button className="nav-toggle" onClick={toggleSidebar}>
                ☰ {/* Hamburger icon */}
            </button></li>
            <li><Link to={

                '/dashboard'             

            } onClick={handleLinkClick}>Dashboard</Link></li> 
            <li><Link to="/tasks" onClick={handleLinkClick}>Tasks</Link></li>
            <li><Link to="/reflections" onClick={handleLinkClick}>Reflections</Link></li>
            <li><Link to={"/profile/" + localStorage.getItem("OPTIFLOW_PUBLIC_ID")} onClick={handleLinkClick}>Profile</Link></li>
            {/* add logout logic */}
            <li><Link to={"/activities"}>Activities</Link></li>
            <li><Link to="/" onClick={handleLogoutClick}>Logout</Link></li>
        </ul>
        )

        : <ul></ul>
        

        }
    </nav>
);
};


export default Navbar;
