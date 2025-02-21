import React from 'react'
import { products } from '../datas/productData';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext'
import {useContext} from 'react'

export default function product() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Bestseller</h2>
      <div className="grid grid-cols-1 sm:grid-cold-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/products/${product.id}`}
            key={product.id}
            className="flex flex-col items-left shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover bg-gray-100"></img>
            <h2 className="text-left text-lg font-medium text-gray-800 bg-white p-1 w-full">
              {product.name}
            </h2>
            <p className="text-left text-gray-800 bg-gray-100 bg-white p-1 w-full">
              {product.description}
            </p>
            <div className="flex space-x-4">
              <p className="text-left text-gray-800 bg-gray-100 bg-white p-1">
                {product.discountPrice}
              </p>
              <p className="text-left text-gray-800 bg-gray-100 bg-white py-1 line-through">
                {product.normalPrice}
              </p>
              <Link to={`/products/${product.id}`}>
              <button onClick={() => addToCart(product)} className='bg-blue-500 text-white px-2 py-1 mt-2'>Add To Cart</button>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
