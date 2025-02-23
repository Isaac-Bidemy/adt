import React from "react";
import { Link } from "react-router-dom";
import adetutuImage from "../assets/images/tu1.jpg"; // Replace with actual image path

export default function LoveStory1() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 to-red-500">
      <div className="max-w-4xl p-8 bg-white shadow-2xl rounded-lg text-center relative">
        
        {/* Large Profile Image in the Middle */}
        <div className="flex justify-center">
          <img
            src={adetutuImage}
            alt="Adetutu Olamide"
            className="w-60 h-60 object-cover rounded-full border-8 border-white shadow-lg"
          />
        </div>

        {/* Love Message */}
        <h1 className="mt-6 text-4xl font-cursive font-bold text-red-600">My Love, Adetutu Olamide ❤</h1>
        
        <p className="mt-6 text-gray-700 text-lg leading-relaxed italic">
          My beautiful Adetutu Olamide,  
          From the moment I met you, I knew my heart had found its home.  
          You are my sunshine, my joy, and the love that makes life meaningful.  
        </p>
        
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          I promise to take you around the world, to cherish you every moment, and to build a love story that will last forever.  
          By the grace of God, I will marry you, and together, we will walk in love, peace, and joy.  
          Our love is not just for now but for eternity. We will make heaven together in Jesus' name.  
        </p>

        <p className="mt-6 text-2xl font-bold text-red-600">I love you beyond words, Adetutu Olamide. ❤</p>

        {/* Signature */}
        <p className="mt-4 text-gray-800 font-semibold">- ISAAC-BIDEMY</p>

        {/* Call to Action */}
        <div className="mt-8">
          <Link to="/Login">
            <button className="px-8 py-3 bg-red-600 text-white font-semibold text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300">
              See Our Journey
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}