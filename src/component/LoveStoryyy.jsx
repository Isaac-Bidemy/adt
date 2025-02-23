import React from "react";
import { Link } from "react-router-dom";

export default function LoveStoryyy() {
  return (
    <div className="flex items-center justify-center mt-12 rounded-2xl min-h-screen bg-gradient-to-r from-pink-300 to-purple-400">
      <div className="relative max-w-3xl p-8 bg-white shadow-2xl rounded-lg text-center">
        {/* Decorative Flowers */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-pink-500 rounded-full transform -translate-x-4 -translate-y-4"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-500 rounded-full transform translate-x-4 translate-y-4"></div>

        <h1 className="text-4xl font-cursive font-bold text-pink-600">To My Forever Love, Adetutu ❤</h1>
        
        <p className="mt-6 text-gray-700 text-lg leading-relaxed italic">
          My beautiful Adetutu,  
          You are the melody in my heart, the light in my darkest days, and the dream I never want to wake up from.  
          I promise to take you around the world, hand in hand, discovering the wonders of life together.  
        </p>
        
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          I will marry you by the grace of God, and we will build a love story so beautiful that even the stars will envy us.  
          Our journey is not just for this lifetime, but for eternity. We will make heaven together in Jesus’ name.  
        </p>

        <p className="mt-6 text-2xl font-bold text-purple-600">I love you beyond words, Adetutu. ❤</p>

        {/* Signature */}
        <p className="mt-4 text-gray-800 font-semibold">- ISAAC-BIDEMY</p>

        {/* Call to Action */}
        <div className="mt-8">
          <Link to="/OurStory">
            <button className="px-8 py-3 bg-pink-600 text-white font-semibold text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300">
              Read Our Story
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}