// Header.js
import './App.css';
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <section className="flex">
                <a href="#home" className="logo">
                    <i className="fas fa-money-bill-trend-up"></i>
                    TradingHarbor
                </a>
                <a href="#download" className="btn">download app</a>
            </section>
        </header>
    );
};

export default Header;
