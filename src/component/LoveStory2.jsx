import React from "react";
import { Link } from "react-router-dom";
import adetutuImage from "../assets/images/tu2.jpg"; // Replace with actual image path

export default function LoveStory2() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="max-w-4xl p-8 shadow-2xl rounded-lg text-center">
        
        {/* Large Square Profile Image in the Middle */}
        <div className="flex justify-center">
          <img
            src={adetutuImage}
            alt="Adetutu Olamide Grace Odunayo"
            className="w-80 h-80 object-cover border-8 border-white shadow-lg"
          />
        </div>

        {/* Love Message */}
        <h1 className="mt-6 text-4xl font-bold text-red-500">My Love, Adetutu Olamide Grace Odunayo ❤</h1>
        
        <p className="mt-6 text-gray-300 text-lg leading-relaxed italic">
          My queen, my heart, my forever love...  
          You are the most precious gift God has given me, the light that brightens my darkest days, and the reason my heart beats with joy.  
        </p>
        
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          I promise to take you around the world, to cherish you, and to love you endlessly.  
          By the grace of God, I will marry you, and together, we will build a life full of happiness, love, and peace.  
          Our love is eternal, and together, we will make heaven in Jesus' name.  
        </p>

        <p className="mt-6 text-2xl font-bold text-red-500">I love you beyond words, Adetutu Olamide Grace Odunayo. ❤</p>

        {/* Signature */}
        <p className="mt-4 text-gray-400 font-semibold"> ISAAC-BIDEMY</p>

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