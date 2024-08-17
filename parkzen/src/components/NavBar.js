import React from 'react';
import './NavBar.css'; // Import the CSS file

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Parkzen</div>
            <ul className="navbar-list">
                <li className="navbar-item"><a href="/parking-areas">Parking Areas</a></li>
                <li className="navbar-item"><a href="/profile">Profile</a></li>
                <li className="navbar-item"><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;