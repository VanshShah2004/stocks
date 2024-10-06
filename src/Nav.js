// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <nav className="nav">
                    <Link to="/">  {/* Home Page */}
                        <i className="fas fa-home"></i>
                        <span>Home</span>
                    </Link>
                    <Link to="/about">  {/* About Page */}
                        <i className="fas fa-circle-info"></i>
                        <span>About</span>
                    </Link>
                    <Link to="/download">  {/* Download Page */}
                        <i className="fas fa-download"></i>
                        <span>Download</span>
                    </Link>
                    <Link to="/pricing">  {/* Pricing Page */}
                        <i className="fas fa-comments-dollar"></i>
                        <span>Pricing</span>
                    </Link>
                    <Link to="/login">  {/* Login Page */}
                        <i className="fas fa-user"></i>
                        <span>Login</span>
                    </Link>
                </nav>
            </div>
        </nav>
    );
};

export default Navbar;
