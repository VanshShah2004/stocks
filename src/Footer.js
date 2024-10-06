import './App.css';
// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="box-container">
                <div className="box">
                    <h3>quick links</h3>
                    <a href="#home"><i className="fas fa-angle-right"></i>home</a>
                    <a href="#about"><i className="fas fa-angle-right"></i>about</a>
                    <a href="#download"><i className="fas fa-angle-right"></i>download</a>
                    <a href="#pricing"><i className="fas fa-angle-right"></i>pricing</a>
                </div>

                <div className="box">
                    <h3>useful links</h3>
                    <a href="#"><i className="fas fa-angle-right"></i>FAQ</a>
                    <a href="#"><i className="fas fa-angle-right"></i>login / register</a>
                    <a href="#"><i className="fas fa-angle-right"></i>privacy policy</a>
                    <a href="#"><i className="fas fa-angle-right"></i>terms and conditions</a>
                </div>

                <div className="box">
                    <h3>contact us</h3>
                    <a href="tel:8938744397"><i className="fas fa-phone"></i>+123-456-789</a>
                    <a href="tel:18007909"><i className="fas fa-phone"></i>+111-333-4455</a>
                    <a href="mailto:tradingh@gmail.com"><i className="fas fa-envelope"></i>tradingh@gmail.com</a>
                    <a href="mailto:tharbor@gmail.com"><i className="fas fa-envelope"></i>tharbor@gmail.com</a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="#"><i className="fab fa-youtube"></i>youtube</a>
                    <a href="#"><i className="fab fa-instagram"></i>instagram</a>
                    <a href="#"><i className="fab fa-whatsapp"></i>whatsapp</a>
                </div>
            </section>
            <div className="credit">
                created by <span>Vansh Mitul Shah</span> | all rights reserved |
            </div>
        </footer>
    );
};

export default Footer;
