import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a34] to-[#2f6b57] text-white px-4">
      
      <div className="text-center max-w-lg">
        
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-widest">
          404
        </h1>

        {/* Glow Effect */}
        <div className="w-24 h-1 bg-white mx-auto my-4 rounded"></div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Oops! Page not found
        </h2>

        <p className="text-gray-200 mb-8 text-sm md:text-base">
          The page you’re looking for doesn’t exist or has been moved.  
          Let’s get you back to something useful.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="px-6 py-3 bg-white text-[#2f6b57] font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;