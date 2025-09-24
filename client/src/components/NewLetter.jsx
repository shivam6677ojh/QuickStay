import React from 'react';
import { assets } from '../assets/assets';

// You can use an icon library like react-icons if you prefer
// import { FiArrowRight } from 'react-icons/fi';

const NewsLetter = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
        alert('Thank you for subscribing!');
    };

    return (
        <div className='flex justify-center items-center  mb-30 px-4 '>
            <div className="bg-[#1a1f2e] p-8 sm:p-12 rounded-3xl max-w-5xl w-full text-center shadow-2xl">
                {/* Heading */}
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Stay Inspired
                </h2>

                {/* Description */}
                <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Join our newsletter and be the first to discover new destinations,
                    exclusive offers, and travel inspiration.
                </p>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl mx-auto mb-4"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        aria-label="Email Address"
                        required
                        className="bg-white text-gray-800 placeholder-gray-500 px-4 py-3 rounded-lg border-0 w-full flex-grow focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white font-semibold px-6 py-3 rounded-lg w-full sm:w-auto flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a1f2e] focus:ring-white transition-colors group"
                    >
                        Subscribe
                        {/* Using an HTML entity for the arrow */}
                        <img src={assets.arrowIcon} alt="arrow-icon" className='invert group-hover:translate-x-2 transition-all ' />
                        {/* Or use an icon: <FiArrowRight size={20} /> */}
                    </button>
                </form>

                {/* Privacy Note */}
                <p className="text-xm text-gray-500">
                    By subscribing, you agree to our Privacy Policy and consent to receive
                    updates.
                </p>
            </div>
        </div>
    );
};

export default NewsLetter;