import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className='flex justify-between items-start p-8 border-y-4 rounded-lg'>
       <img className='w-1/3 w-full-auto object-contain border-y-4 rounded-lg' src='src\assets\images\tu3.jpg'></img>
       <div className='w-2/3 flex flex-col items-center space-y-4 mt-48 '>

       <h2 className='font-bold text-xl'> Welcome to Isaac Bidemy's signatory</h2>
       <h3 className='font-semibold'> Please Login in Here</h3>
       <Link to="/Login">
                   <button
                  type="submit"
                  className="w-full bg-gray-950 text-white py-2 px-4 rounded-md hover:bg-gray-800"
                >
                  Login
                  
                </button>
                </Link>
       </div>
       </div>
      </div>
    </div>
  );
}
