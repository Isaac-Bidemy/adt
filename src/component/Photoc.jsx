import React from 'react';
import tutu from '../assets/images/tutu.jpg';
import tu2 from '../assets/images/tu2.jpg';
import b2 from '../assets/images/b2.jpg';
import tu1 from '../assets/images/tu1.jpg';

export default function Photoc() {
  // Data for photos, names, descriptions, and pickup lines
  const photos = [
    { src: tu2, name: "GRACE", text: "You're a beautiful, exclusive, and classic love story that I'm honored to be a part of.", pickup: "Are you French? Because Eiffel for you." },
    { src: b2, name: "OLAMIDE", text: "Your beautiful heart, exclusive love, and classic style make you a true treasure.", pickup: "Do you have a map? I keep getting lost in your eyes." },
    { src: tu1, name: "KIKELOMO", text: "Our love is a beautiful, exclusive, and classic masterpiece that I cherish every day.", pickup: "Are you a shooting star? Because my world is brighter with you in it." },
    { src: tu2, name: "ODUNAYO", text: "You're the beautiful, exclusive, and classic missing piece that makes me whole.", pickup: "Do you believe in fate? Because I think we were meant to be." }
  ];

  return (
    <div className="max-w-6xl mx-auto mt-9">
      
      {/* Title */}
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">A Love Story in Pictures</h2>

      {/* Scrollable Photo Container */}
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide p-4">
        {photos.map((photo, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg min-w-[280px] sm:min-w-[320px] md:min-w-[360px] transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Image with Hover Effect */}
            <img
              src={photo.src}
              alt={photo.name}
              className="w-full h-52 object-cover rounded-t-lg hover:opacity-80 transition"
            />
            
            {/* Text Content */}
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-900">{photo.name}</h2>
              <p className="text-gray-600 my-2">{photo.text}</p>
              <p className="mt-3 text-sm italic text-pink-500">"{photo.pickup}"</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}