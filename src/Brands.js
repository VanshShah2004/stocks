// Brands.js
import React from 'react';
import brand101 from './images/brand101-removebg-preview.png'; // Adjust paths as needed
import brand2 from './images/brand2-removebg-preview.png';
import brand3 from './images/brand3-removebg-preview.png';
import brand4 from './images/brand4-removebg-preview.png';
import brand5 from './images/brand5-removebg-preview.png';
import brandFinal from './images/brandfinal-removebg-preview.png';

const Brands = () => {
    const brandImages = [
        brand101,
        brand2,
        brand3,
        brand4,
        brand5,
        brandFinal,
    ];

    return (
        <section className="brands">
            {/* First brands-container */}
            <div className="brands-container">
                {brandImages.map((image, index) => (
                    <img src={image} alt={`Brand ${index + 1}`} key={index} />
                ))}
            </div>

            {/* Second brands-container */}
            <div className="brands-container">
                {brandImages.map((image, index) => (
                    <img src={image} alt={`Brand ${index + 1}`} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Brands;
