import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-100 py-20 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-500 mb-6 max-w-xl mx-auto">
        Your personal list of meaningful connections. Discover, track, and nurture the relationships that matter most.
      </p>

      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow">
        + Add a Friend
      </button>
    </div>
  );
};

export default Banner;