// Newsletter.js
import React, { useState } from 'react';

const Newsletter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // Handle the subscription logic here (e.g., API call)
        console.log(`Name: ${name}, Email: ${email}`);
        // Reset the form fields
        setName('');
        setEmail('');
    };

    return (
        <div className="newsletter">
            <section className="news">
                <h3>Get Latest News</h3>
                <p>Stay ahead with our up-to-the-minute market updates.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        maxLength="30"
                        className="input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        maxLength="50"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="submit" value="Subscribe Now" className="btn" />
                </form>
            </section>
        </div>
    );
};

export default Newsletter;
