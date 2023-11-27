import React from 'react'
import { useRouteError } from 'react-router-dom'
import error_page from '../assets/Image/error_page.jpg'
import { Link } from 'react-router-dom'

const Error = () => {
  const err=useRouteError();
  console.log(err);  
  return (
    <>
        <img className='m-auto h-96' src={error_page} alt='error_page'></img>
        <p className='font-bold text-4xl w-fit my-2 mx-auto'>OOPS!! Page Not Found</p>
        <p className='font-bold text-base w-fit my-2 mx-auto'>You can go to home page to view more restaurants</p>
        <div className='w-fit mx-auto mb-[53px]'>
          <Link to="/"><button className='bg-black text-white font-bold mx-auto px-2 py-1 rounded-sm w-32 h-12'>Go to Home</button></Link>    
        </div>
    </>
  )
}

export default Error