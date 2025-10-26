import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    // The main content is now in a separate div to respect the top padding
    <div className="bg-brand-red text-white min-h-screen flex flex-col items-center justify-center text-center p-8 pt-16">
      <div className="max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          <span className="font-serif">वेदा</span> BLOOM
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          A space to connect with your body's rhythm. A space to find calm in natural flow.
        </p>
        <div className="text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Let's begin your journey.</h2>
            {/* The "Begin" button now links to the login page */}
            <Link to="/login" className="inline-block bg-white text-brand-red font-bold py-4 px-8 rounded-full text-xl hover:bg-red-100 transition duration-300">
                Begin
            </Link>
        </div>
      </div>
    </div>
  );
}
