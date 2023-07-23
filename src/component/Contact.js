import React from 'react'
import { name,mail,linkedin,github } from '../config';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Contact = () => {
  return (
    <div className='flex flex-col mx-10 my-5'>
      <h1 className='font-bold text-xl'>Contact Us Page</h1>
      <div>
      <div className='flex w-60 bg-[#F2553B] shadow-md m-2 p-4 cursor-pointer font-bold text-white rounded-sm'>
            <p><MailOutlineIcon></MailOutlineIcon></p>
            <p className='px-5'> Mail</p>
        </div>
        <div className='flex w-60 bg-[#087EB8] shadow-md m-2 p-4 cursor-pointer font-bold text-white rounded-sm'>
            <p><LinkedInIcon></LinkedInIcon></p>
            <p className='px-5'> LinkedIn</p>
        </div>
        <div className='flex w-60 bg-[#010001] shadow-md m-2 p-4 cursor-pointer font-bold text-white rounded-sm'>
            <p><GitHubIcon></GitHubIcon></p>
            <p className='px-5'> Github</p>
        </div>
      </div>
    </div>
  )
}

export default Contact