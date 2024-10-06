import './App.css';
// Reviews.js
// Reviews.js
import React, { useState, useEffect } from 'react';
import feedback2 from './images/feedback2.jpg'; // Adjust the path as needed
import feedback3 from './images/feedback3.jpg';
import feedback4 from './images/feedback4.jpg';
import feedback5 from './images/feedback5.jpg';

// Review data array
const reviewsData = [
    {
        text: "Absolutely love this platform! It's incredibly user-friendly and has helped me navigate the complexities of trading effortlessly. The support team is always quick to respond to any questions I have. Highly recommend!",
        user: "Jahanvi Nandwana Bohra",
        image: feedback2,
        stars: 4.5,
    },
    {
        text: "I've tried a few trading apps before, but this one stands out. The real-time market insights have been invaluable in making informed decisions, and the secure payment system gives me peace of mind. Fantastic service!",
        user: "Anshul Nandwana",
        image: feedback3,
        stars: 4.5,
    },
    {
        text: "I'm fairly new to trading, but this platform has made the learning curve so much easier. The expert financial advisory services have helped me build a solid strategy, and the intuitive tools make executing trades a breeze. Couldn't be happier!",
        user: "Siddharth Jain",
        image: feedback4,
        stars: 4.5,
    },
    {
        text: "This platform has exceeded my expectations. The 24/7 support is truly exceptional – I've never had to wait long for assistance. Plus, the seamless withdrawal process means I can access my funds whenever I need them. Overall, a fantastic experience!",
        user: "Affan Ahmed",
        image: feedback5,
        stars: 4.5,
    },
];

const Reviews = () => {
    // State to hold the index of the currently displayed review
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
    };

    // Automatically change the slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slides every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <section className="reviews">
            <div className="flex">
                <div className="content">
                    <h3>What Our Clients Say!</h3>
                    <p>Here are the feedbacks from our clients:</p>
                    <div className="controls">
                        <div className="fas fa-angle-left" onClick={prevSlide}></div>
                        <div className="fas fa-angle-right" onClick={nextSlide}></div>
                    </div>
                </div>

                <div className="slides-container">
                    {reviewsData.map((review, index) => (
                        <div className={`slide ${index === currentIndex ? 'active' : ''}`} key={index}>
                            <p className="text">{review.text}</p>
                            <div className="user">
                                <img src={review.image} alt={review.user} />
                                <div>
                                    <h3>{review.user}</h3>
                                    <div className="stars">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <i className={`fas fa-star ${starIndex < Math.floor(review.stars) ? '' : 'fa-sta-half-alt'}`} key={starIndex}></i>
                                        ))}
                                    </div>
                                </div>
                                <i className="fas fa-quote-right"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;

