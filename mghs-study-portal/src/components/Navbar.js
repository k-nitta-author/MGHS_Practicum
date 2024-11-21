import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false); // Toggle sidebar

    const [isLoggedIn, setIsLoggedIn] = useState(true); // Toggle navbar visibility

    useEffect(() => {
        // Update `isLoggedIn` when `localStorage` changes
        const handleStorageChange = () => {
            setIsLoggedIn(!!localStorage.getItem("token")); // Check if token exists
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close sidebar when a link is clicked
    };


    const handleLogoutClick = () => {
        localStorage.clear();
        setIsLoggedIn(false)

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
            <li><Link to={

                isAdmin? "/admin-dashboard": "intern-dashboard"                  

            } onClick={handleLinkClick}>Dashboard</Link></li> 
            <li><Link to="/tasks" onClick={handleLinkClick}>Tasks</Link></li>
            <li><Link to="/reflections" onClick={handleLinkClick}>Reflections</Link></li>
            <li><Link to="/profile" onClick={handleLinkClick}>Profile</Link></li>
            {/* add logout logic */}
            <li><Link to="/" onClick={handleLogoutClick}>Logout</Link></li>
            <li>
                <Link to="/" onClick={handleLinkClick}>
                    <img src=".\src\assets\icons\notification-bell.svg" alt="Notifications" />
                </Link>
            </li>
        </ul>
        )

        : <ul></ul>
        

        }
    </nav>
);
};


export default Navbar;
