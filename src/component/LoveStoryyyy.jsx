import React from "react";
import { Link } from "react-router-dom";
import adetutu1 from "../assets/images/tu1.jpg"; // Replace with actual image path
import adetutu2 from "../assets/images/tu2.jpg"; // Replace with actual image path

export default function LoveStoryyyy() {
  return (
    <div className="flex items-center justify-center mt-12 rounded-2xl min-h-screen bg-gradient-to-r from-rose-300 to-red-500">
      <div className="relative max-w-3xl p-8 bg-white shadow-xl rounded-lg text-center">
        
        {/* Profile Images */}
        <div className="flex justify-center -mt-16">
          <img
            src={adetutu1}
            alt="Adetutu"
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
          />
          <img
            src={adetutu2}
            alt="Adetutu"
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg -ml-6"
          />
        </div>

        {/* Love Message */}
        <h1 className="mt-4 text-4xl font-cursive font-bold text-red-600">My Queen, Adetutu ❤</h1>
        <p className="mt-6 text-gray-700 text-lg leading-relaxed italic">
          My love, my heart, my forever...  
          You are the most beautiful story that God has ever written into my life.  
          I promise to take you around the world, to laugh with you, to hold your hand, and to create memories that will last a lifetime.  
        </p>
        
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          By the grace of God, I will marry you, and together we will build a love story that will inspire generations.  
          Our love is destined for eternity. We will make heaven together in Jesus’ name.  
        </p>

        <p className="mt-6 text-2xl font-bold text-red-600">I love you beyond words, Adetutu. ❤</p>

        {/* Signature */}
        <p className="mt-4 text-gray-800 font-semibold">- ISAAC-BIDEMY</p>

        {/* Call to Action */}
        <div className="mt-8">
          <Link to="/OurStory">
            <button className="px-8 py-3 bg-red-600 text-white font-semibold text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300">
              See Our Journey
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}