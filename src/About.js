import './App.css';
// About.js
import React from 'react';
import aboutImage from './images/part2pic-removebg-preview.png'; // Adjust the path as needed

const About = () => {
    return (
        <div className="about" id="about">
            <section className="flex">
                <div className="content">
                    <h3>&#8226; benefits we offer!</h3>
                    <p>&#8226; Seamless trading experiences</p>
                    <p>&#8226; Real-time market insights</p>
                    <p>&#8226; Expert financial advisory services</p>
                    <p>&#8226; Secure transactions</p>
                    <p>&#8226; Round-the-clock support</p>
                    <p>&#8226; Intuitive tools for maximizing potential</p>
                    <p>&#8226; Convenient deposits and withdrawals</p>
                    <p>&#8226; Hassle-free fund management</p>
                    <a href="#" className="btn">learn trading</a>
                </div>

                <div className="image">
                    <img src={aboutImage} alt="About Trading" />
                </div>
            </section>
        </div>
    );
};

export default About;
