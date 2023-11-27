import React from 'react'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
    <>
        <img className='m-auto h-96' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"></img>
        <p className='font-bold text-xl w-fit my-2 mx-auto'>Your cart is empty</p>
        <p className='text-base w-fit my-2 mx-auto'>You can go to home page to view more restaurants</p>
        <div className='w-fit mx-auto mb-[53px]'>
        <Link to="/"><button className='bg-black text-white font-bold mx-auto px-2 py-1 rounded-sm w-32 h-12'>Go to Home</button></Link>    
        </div>
    </>
  )
}

export default EmptyCart