import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md">
      <div className="flex justify-between items-center py-6 px-6 md:px-10">
        
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-semibold">ADETUTU</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-semibold">
          <Link to="/" className="hover:bg-gray-300 px-2 py-1 rounded-md">Home</Link>
          <Link to="/contact" className="hover:bg-gray-300 px-2 py-1 rounded-md">Contact</Link>
          <Link to="/ourstory" className="hover:bg-gray-300 px-2 py-1 rounded-md"></Link>
          <Link to="/blog" className="hover:bg-gray-300 px-2 py-1 rounded-md"></Link>
          
        </div>

        {/* Icons & Sign Out */}
        <div className="hidden md:flex space-x-4 items-center">
          <LuSearch />
          <FiHeart />
          <HiOutlineShoppingBag />
          <Link className="bg-black text-white text-xs px-4 py-2 rounded-md" to="/login">SIGN OUT</Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-6">
          <Link to="/" className="hover:bg-gray-300 px-4 py-2 rounded-md">Home</Link>
          <Link to="/contact" className="hover:bg-gray-300 px-4 py-2 rounded-md">Contact</Link>
          <Link to="/ourstory" className="hover:bg-gray-300 px-4 py-2 rounded-md"></Link>
          <Link to="/blog" className="hover:bg-gray-300 px-4 py-2 rounded-md"></Link>
         
          <div className="flex space-x-4">
            <LuSearch />
            <FiHeart />
            <HiOutlineShoppingBag />
          </div>
          <Link className="bg-black text-white text-xs px-4 py-2 rounded-md" to="/login">SIGN OUT</Link>
        </div>
      )}
    </nav>
  )
}