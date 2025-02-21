import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your Cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border p-2 my-2 flex justify-between bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-48 object-cover rounded-md mb-4" 
            />
            <div>
              <h2 className="text-black font-semibold text-lg mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-red-500 font-bold">${item.discountPrice}</span>
                <span className="line-through text-gray-500">${item.normalPrice}</span>
                <span>
                  {item.name} - ${item.price} x {item.quantity} 
                </span>
                <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-300 px-2 py-1 mx-1 rounded">-</button>
                <button onClick={() => increaseQuantity(item.id)} className="bg-gray-300 px-2 py-1 mx-1 rounded">+</button>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 py-1 mx-1 rounded">Remove</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}