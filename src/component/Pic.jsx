import React from 'react'

export default function Pic() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  ">
          <h2 className="text-3xl font-bold mb-4  ">3x3 Gallery</h2>
          <div className="grid grid-cols-3 gap-4 border-4 ">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="
                  relative 
                  bg-gray-200 
                  hover:scale-110 
                  transition-transform 
                  duration-500 
                  ease-in-out
                "
              >
                <img
                  src={`https://picsum.photos/200/300?random=${index}`}
                  alt={`Image ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
                <div
                   className="
                   text-sm 
                   font-bold 
                   mb-4 
                   bg-gray-900 
                   bg-opacity-50 
                   text-white 
                   p-2 
                   hover:scale-110
                   hover:h-8 
                   transition-transform 
                   duration-500 
                   ease-in-out
                 "
                >
                  <p>Next.js: The Complete Guide {index + 1}</p>
                  <p>next.js {index + 1}</p>
                </div>
                <div
                  className="
                    text-3xl 
              font-bold 
              mb-4 
              bg-white
              bg-opacity-50 
              text-black
              p-2 
              hover:scale-110 
              h-10
              transition-transform 
              duration-500 
              ease-in-out
                  "
                />
              </div>
            ))}
          </div>
        </div>
      );
    }