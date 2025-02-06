import React from 'react'
import { categories } from '../datas/categoriesData'
export default function Categories() {
  return (
    <div className="container mx-auto p-6">
    <h2 className="text-3xl font-bold text-center mb-8">
      Shop by Categories
    </h2>
    <div className="grid grid-cols-1 sm:grid-cold-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-64 object-cover"></img>
          <h2 className="text-center text-lg font-medium text-gray-800 bg-gray-100 py-4 px-6 w-full">
            {category.name}
          </h2>
        </div>

        ))}
        </div>
    </div>
  )
}
