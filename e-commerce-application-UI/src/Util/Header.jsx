import React from 'react'
import { Link } from 'react-router-dom'
import lens from '../Images/lens1.jpg';
import User from  '../Images/user.jpg'; 
import Cart from '../Images/cart.jpg';
import Seller from '../Images/seller.jpg';
import { FaRegUserCircle } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";


const Header = () => {
  return (

      <div className='w-full mt-8 p-2 h-16 bg-slate-400 flex flex-items-center justify-around '>
        <div className='flex'>

          <div className='ml-20'>
            <h1 className='text-blue-700  text-xl font-bold italic'>Flipkart</h1>
            <h4 className='text-gray-500 italic'>Explores</h4>
            </div>
          <div className='bg-blue-50 flex items-center p-2 h-9 w-full rounded-lg ml-7'>
              <img src={lens}  className='w-5 h-5 ml-2 '/>
              <input className=" bg-blue-50 ml-3 text-gray-900 text-xl rounded-lg  
              block w-[800px]  " placeholder="Search for Products, Brands and More" required />
             
          </div>
        </div>

        
          <div className='flex  ml-16 mb-80'>
            {/* <img src={User} className='flex w-6 h-6' /> */}
            <FaRegUserCircle />
            <h1 className='ml-2'>Login</h1>
          </div>

        <div className=' flex  ml-16 mb-80 '>
          <img src={Cart} className=' flex w-6 h-6'/>
          <h1 className='ml-2'>Cart</h1>
        </div>
        <div className=' flex   mr-3 ml-44' >
          {/* <img src={Seller} className='flex w-15 h-12'/> */}
         <h1 className=''> <FaUniversity /></h1>
           <h4 className='ml-2 w-80 mt-3'>Become a Seller</h4>
        </div>
        </div>
    



    
  )
}
 
export default Header