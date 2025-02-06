import React from 'react'

export default function Pic2() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">3x3 Gallery</h2>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="relative bg-gray-200 rounded-lg transition-transform duration-500 ease-in-out">
                <img src={`https://picsum.photos/200/300?random=${index}`} alt={`Image ${index + 1}`} className="w-full h-80 object-cover rounded-lg" />
                <div className="flex justify-center items-center h-10 border-4">
                  <div className="bg-gray-200 rounded-lg p-4 w-48 h-48 flex justify-center items-center relative group">
                    <p className="text-gray-900 text-lg font-bold">Next.js: The Complete Guide

                    <br/><h6>next.js /</h6></p>
                    <button className="absolute hidden group-hover:block bg-black  hover:bg-green hover:h-30 hover:w-30 text-gray-600 hover:text-white py-2 px-4 rounded-lg transition-duration-300 transition-timing-function-ease-in-out transition-transform">
                      Click Here
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    