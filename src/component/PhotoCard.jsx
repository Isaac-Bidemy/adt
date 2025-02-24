import React from 'react';
import tutu from '../assets/images/tutu.jpg';
import tu2 from '../assets/images/tu2.jpg';
import b2 from '../assets/images/b2.jpg';
import tu1 from '../assets/images/tu1.jpg';

export default function PhotoCard() {
  // Data array for images and texts
  const photos = [
    { src: tu2, name: "GRACE", text: "You're a beautiful, exclusive, and classic love story that I'm honored to be a part of.", pickup: "Are you a magician? Because every time I look at you, everyone else disappears." },
    { src: b2, name: "OLAMIDE", text: "Your beautiful heart, exclusive love, and classic style make you a true treasure.", pickup: "Do you believe in love at first sight, or should I walk by again?" },
    { src: tu1, name: "KIKELOMO", text: "Our love is a beautiful, exclusive, and classic masterpiece that I cherish every day.", pickup: "If beauty were time, you'd be an eternity." },
    { src: tu2, name: "ODUNAYO", text: "You're the beautiful, exclusive, and classic missing piece that makes me whole.", pickup: "You must be a campfire, because you’re hot and I want s’more!" }
  ];

  return (
    <div className="max-w-6xl mx-auto mt-9">
      
      {/* Scrollable Container */}
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide p-4">
        {photos.map((photo, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md min-w-[250px] sm:min-w-[300px] md:min-w-[350px] transform transition duration-300 hover:scale-105">
            <img
              src={photo.src}
              alt={photo.name}
              className="w-full h-48 object-cover rounded-t-lg hover:opacity-80 transition"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{photo.name}</h2>
              <p className="text-gray-600">{photo.text}</p>
              <p className="mt-2 text-sm italic text-blue-500">"{photo.pickup}"</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}