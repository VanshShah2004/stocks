import './App.css'
// Services.js
import React from 'react';

const Services = () => {
    return (
        <section className="services">
            <div className="box-container">
                <div className="box">
                    <i className="fas fa-money-bill-trend-up"></i>
                    <h3>extra income</h3>
                    <p>
                        Our platform provides opportunities to generate extra income through accessible trading tools and real-time market insights, empowering users to capitalize on financial opportunities with ease.
                    </p>
                </div>

                <div className="box">
                    <i className="fas fa-coins"></i>
                    <h3>financial advisory</h3>
                    <p>
                        Our platform offers expert financial advisory services, leveraging a team of seasoned professionals to provide personalized guidance and strategic insights tailored to your investment goals and risk tolerance.
                    </p>
                </div>

                <div className="box">
                    <i className="fas fa-shield-halved"></i>
                    <h3>account protection</h3>
                    <p>
                        Rest assured, your account's security is our top priority. We employ state-of-the-art encryption and robust security measures to safeguard your personal and financial information, ensuring peace of mind as you trade confidently on our platform.
                    </p>
                </div>

                <div className="box">
                    <i className="fas fa-credit-card"></i>
                    <h3>easy payments</h3>
                    <p>
                        Experience hassle-free transactions with our seamless payment system. Enjoy quick and secure deposits and withdrawals, making managing your funds a breeze as you focus on maximizing your trading potential.
                    </p>
                </div>

                <div className="box">
                    <i className="fas fa-money-bill-transfer"></i>
                    <h3>easy withdraw</h3>
                    <p>
                        With our user-friendly withdrawal process, accessing your funds is simple and efficient. Enjoy the convenience of seamless withdrawals, ensuring that you can easily transfer your earnings whenever you need them.
                    </p>
                </div>

                <div className="box">
                    <i className="fas fa-headset"></i>
                    <h3>24/7 support</h3>
                    <p>
                        24/7 support ensures you're never alone. Our dedicated team is here to assist you anytime, ensuring a smooth trading experience from start to finish.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
