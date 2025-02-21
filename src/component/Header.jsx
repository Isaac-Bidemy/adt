import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
export default function Header() {
  return (
    <nav>
        <div className='flex justify-around shadow-md py-6 items-center'>
        <div>  <Link to="/" className='text-2xl font-semibold' >ADETUTU</Link></div>
          <div className='flex justify-between space-x-4 text-x font-semibold items-center'>
          <Link to="/">Home</Link>

          <div className='flex items-center'>
          
          {/*<Link><RiArrowDropDownLine size={25}/></Link>*/}
         </div>

          <Link to="/ourstory">Our Story</Link>
          <Link to="/blog"></Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className='hover:text-blue-700'></Link>
            </div>
          
          <div  className='flex space-x-4 items-center'>
          <div className='flex space-x-4 items-center'>
            <LuSearch />
          <FiHeart />
          <HiOutlineShoppingBag />
          </div>
            <Link className='bg-black text-white text-xs px-4 py-2 rounded-t-lg' to="/Login">SIGNOUT</Link>
          </div>
        </div>

    </nav>
  )
}
