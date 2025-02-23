import React from 'react'


export default function PhotoCard() {
    return (
        <div className="max-w-6xl  mb-68 mx-auto grid grid-cols-4 mt-9 gap-10">
          <div className="bg-white rounded-lg shadow-md">
            <img
              src='src\assets\images\tutu.jpg'
              alt="Image 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">GRACE</h2>
              <p className="text-gray-600">You're a beautiful, exclusive, and classic love story that I'm honored to be a part of</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <img
              src='src\assets\images\tu2.jpg'
              alt="Image 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">OLAMIDE</h2>
              <p className="text-gray-600">Your beautiful heart, exclusive love, and classic style make you a true treasure.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md">
            <img
              src='src\assets\images\b2.jpg'
              alt="Image 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">KIKELOMO</h2>
              <p className="text-gray-600">Our love is a beautiful, exclusive, and classic masterpiece that I cherish every day</p>
            </div>
          </div>
          

          <div className="bg-white rounded-lg shadow-md">
            <img
              src='src\assets\images\tu1.jpg'
              alt="Image 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">ODUNAYO</h2>
              <p className="text-gray-600">You're the beautiful, exclusive, and classic missing piece that makes me whole.</p>
            </div>
          </div>
        </div>
      );
    };
    
    
   
    