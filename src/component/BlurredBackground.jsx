import React from 'react';
import backgroundImage from "../assets/images/tutu.jpg"
import Login from '../pages/Login';

export default function BlurredBackground() {
  return (
    <div 
      className="relative w-300 h-full flex items-center justify-center pt-2 pb-3 bg-cover bg-center bg-fix bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for blur effect */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm">
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white text-sm font-bold">
        <Login />
      </div>
    </div>
  );
}
