import React from 'react'
import { Link } from 'react-router-dom';
export default function Load() {
 return (
     <div className='flex justify-between items-start p-8 border-y-4 rounded-lg'>
       <img className='w-1/3 w-full-auto object-contain' src='src\assets\images\tutu.jpg'></img>
       <div className='w-2/3 flex flex-col items-center space-y-4'>
       <h2 className='font-bold text-xl'> Welcome </h2>
       <h3 className='font-semibold'> Please Login in Here</h3>
       <form>
         <div className='w-2/3 flex flex-col items-start space-y-4'>
           <label htmlFor='email' className='font-semibold'>email</label>
           <input
           type='email'
           id='email'
           name='email'
           required
           />       
 
           <label htmlFor='password' className='font-semibold'>Password</label>
           <input 
           type='password'
           id='password'
           name='password'
           required
           />
           <Link to="/Adetutu">
            <button
           type="submit"
           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
         >
           Login
           
         </button>
         </Link>
         </div>
       </form>
       </div>
       
     </div>
 
   )
 }