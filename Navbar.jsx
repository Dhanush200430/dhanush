import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">HealthTracker</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
       
        <li><Link to="/track">Track Health</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/stats">Stats</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
