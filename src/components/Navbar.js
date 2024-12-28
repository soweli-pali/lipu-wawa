import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active-navbar-item' : 'navbar-item'}
            >
                Home
            </NavLink>
            <NavLink 
                to="/touys" 
                className={({ isActive }) => isActive ? 'active-navbar-item' : 'navbar-item'}
            >
                Touys
            </NavLink>
            <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'active-navbar-item' : 'navbar-item'}
            >
                About
            </NavLink>
        </nav>
    );
};

export default Navbar;
