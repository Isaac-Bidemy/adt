import React from "react";
import { Link } from "react-router-dom";

export default function LoveStoryy() {
  return (
    <div className="flex items-center justify-center mt-12 rounded-2xl min-h-screen bg-pink-100">
      <div className="max-w-2xl p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold text-pink-600">To My Love, Adetutu ❤</h1>
        <p className="mt-4 text-gray-700 text-lg">
          My dearest Adetutu,  
          From the moment I met you, my heart knew it had found its missing piece.  
          I promise to take you around the world, to explore new places and create beautiful memories together.  
          My love for you is deep, unwavering, and eternal.  
        </p>
        <p className="mt-4 text-gray-700 text-lg">
          By the grace of God, I will marry you, and together, we will build a life filled with love, joy, and endless laughter.  
          Our love is not just for this world but for eternity. We will make heaven together in Jesus' name.  
        </p>
        <p className="mt-6 text-xl font-semibold text-pink-500">I love you forever, Adetutu. ❤</p>

        <div className="mt-6">
          <span className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold text-lg">
            Yours forever, [ISAAC-BIDEMY]
          </span>
        </div>

        {/* Signature */}
        <p className="mt-4 text-gray-800 font-semibold">[He makes all things beautiful in his time]</p>

        {/* Button Link to Our Story */}
        <div className="mt-6">
          <Link to="/OurStory">
            <button className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-black transition duration-300">
              BIDEMY
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}