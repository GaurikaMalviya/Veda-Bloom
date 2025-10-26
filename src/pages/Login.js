import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    console.log('Simulating Google Sign-In...');
    navigate('/quiz');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center p-8 pt-16">
      <div className="max-w-md bg-white p-10 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-brand-red mb-4">
          <span className="font-serif">वेदा</span> BLOOM
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome back. Sign in to continue your journey.
        </p>
        <button
          onClick={handleGoogleLogin}
          className="inline-flex items-center justify-center w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
        >
          <svg className="w-6 h-6 mr-3" viewBox="0 0 48 48">
            <path fill="#fff" d="M24 9.5c3.13 0 5.9 1.08 8.07 3.03l6.36-6.36C34.07 2.01 29.35 0 24 0 14.61 0 6.96 5.38 3.3 12.89l7.4 5.7C12.38 12.74 17.7 9.5 24 9.5z"></path>
            <path fill="#34A853" d="M46.17 24.64c0-1.56-.14-3.08-.4-4.56H24v8.6h12.44c-.54 2.78-2.08 5.12-4.4 6.72l7.13 5.5c4.17-3.83 6.6-9.5 6.6-16.26z"></path>
            <path fill="#FBBC05" d="M10.7 28.59c-.58-1.74-.9-3.58-.9-5.5s.32-3.76.9-5.5L3.3 12.89C1.21 16.96 0 21.35 0 26c0 4.65 1.21 9.04 3.3 13.11l7.4-5.22z"></path>
            <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.9-5.74l-7.13-5.5c-2.1 1.4-4.78 2.24-7.77 2.24-6.3 0-11.62-3.24-13.3-7.61L3.3 38.11C6.96 42.62 14.61 48 24 48z"></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
