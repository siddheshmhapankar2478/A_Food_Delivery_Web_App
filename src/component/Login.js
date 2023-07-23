import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col w-1/2 m-auto border border-slate-400 shadow-lg'>
      <h1 className='font-bold text-3xl mx-auto my-3 text-slate-400'>Choose a Login Method</h1>
      
      <div className='flex '>
        
        <div className='w-1/2 my-5'>
          <div className='flex cursor-pointer w-60 bg-[#E14932] shadow-md m-2 p-4 mx-auto font-bold text-white rounded-sm'>
            <p><GoogleIcon></GoogleIcon> </p>
            <p className='px-5'> Google</p>
          </div>
          <div className='flex cursor-pointer w-60 bg-[#517CC1] shadow-md m-2 p-4 mx-auto font-bold text-white rounded-sm'>
            <p><FacebookIcon></FacebookIcon></p>
            <p className='px-5'> Facebook</p>
          </div>
          <div className='flex cursor-pointer w-60 bg-[#010001] shadow-md m-2 p-4 mx-auto font-bold text-white rounded-sm'>
            <p><GitHubIcon></GitHubIcon></p>
            <p className='px-5'> Github</p>
          </div>
        </div>

        <div className="flex items-center justify-center bg-slate-400 h-60 w-[2px] my-2">
            <div className="bg-white p-2 border border-slate-400 rounded-full text-slate-400 font-bold text-lg z-10">OR</div>
        </div>



        <div className='w-1/2 my-5 '>
            <form className='flex flex-col'>
                    <input className='w-52 p-3 mx-auto my-3 font-bold text-base focus:outline-0 border border-slate-400' name='email' type='email' placeholder='Enter Email' ></input>
                    <input className='w-52 p-3 mx-auto my-3 font-bold text-base focus:outline-0 border border-slate-400' name='password' type='password' placeholder='Enter Password' ></input>
                    <button className='border font-bold text-white bg-black border-black hover:bg-white hover:text-black p-3 rounded-sm mx-auto my-3 w-40'><Link to="/">Login</Link></button>
            </form>
        </div>
        
      </div>

    </div>
  )
}

export default Login