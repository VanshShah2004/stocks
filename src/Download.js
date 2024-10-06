import './App.css';
// Download.js
import React from 'react';
import downloadImage from './images/ff89b54832ae39e79bae24683cee04f1-removebg-preview.png'; // Adjust the path as needed

const Download = () => {
    return (
        <div className="download" id="download">
            <section className="flex">
                <div className="image">
                    <img src={downloadImage} alt="Download App" />
                </div>
                <div className="content">
                    <h3>Download and Start Trading!</h3>
                    <p>Begin your journey to financial success with just a click.</p>
                    <div className="links">
                        <a href="#"><i className="fab fa-google-play"></i> Google Play</a>
                        <a href="#"><i className="fab fa-apple"></i> Apple Store</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Download;
