import './App.css';
// Home.js
// Home.js
import React from 'react';
import tradingImage from './images/main3-removebg-preview.png'; // Adjust the path as needed

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="flex">
                <div className="content">
                    <h3>start your trading journey with us &#128077;</h3>
                    <p>
                        Embark on your trading journey with our intuitive app, designed to empower both novice and experienced traders alike. Enjoy seamless navigation, real-time market updates, and user-friendly tools tailored to enhance your trading experience. With our platform, you're equipped to explore financial markets with confidence and efficiency. Start trading smarter, start trading with us.
                    </p>
                    <a href="#download" className="btn">start trading</a>
                </div>

                <div className="image">
                    <img src={tradingImage} alt="Trading App" />
                </div>
            </div>
        </section>
    );
};

export default Home;

