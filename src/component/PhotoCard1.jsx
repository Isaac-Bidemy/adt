import React from 'react';

export default function PhotoCard1() {
  return (
    <div className="min-h-64 bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">
        
        {/* Photo Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            src="src/assets/images/tu2.jpg"
            alt="Grace"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-pink-600">GRACE</h2>
            <p className="text-gray-600 mt-2">You're the poetry my heart never stops writing. My love, my story, my forever.</p>
          </div>
        </div>

        {/* Photo Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            src="src/assets/images/t1.jpg"
            alt="Olamide"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-purple-600">OLAMIDE</h2>
            <p className="text-gray-600 mt-2">With every heartbeat, I love you more. You are the melody my soul sings.</p>
          </div>
        </div>

        {/* Photo Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            src="src/assets/images/tu1.jpg"
            alt="Kikelomo"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-blue-600">KIKELOMO</h2>
            <p className="text-gray-600 mt-2">You are my safe place, my home, my forever dream that became real.</p>
          </div>
        </div>

        {/* Photo Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            src="src/assets/images/tutu.jpg"
            alt="Odunayo"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-red-600">ODUNAYO</h2>
            <p className="text-gray-600 mt-2">Your love is my greatest adventure, and I will cherish it forever.</p>
          </div>
        </div>
      </div>
    </div>
  );
}