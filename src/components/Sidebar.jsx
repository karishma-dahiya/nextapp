'use client';
import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BiBell } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='bg-[#1e375f] min-h-[2rem] overflow-y-clip  py-4 text-white'>
      <div className='flex flex-row text-sm justify-around my-2 mb-4'>
        <div className='flex'>
          <CiUser className='text-white text-2xl mx-1' /> Hello User,
        </div>
        <BiBell className='text-2xl'/>
      </div>
      <hr/>
      <div className='mt-4 my-4 w-full text-sm p-2 text-center bg-[#142341] flex justify-center '>
        <AiOutlineMessage className='text-lg mx-1'/>
        
        Discussion Forum
      </div>
      <div className=' my-4 text-sm text-center flex justify-center  p-2'>
        <FaHistory className='text-lg mx-1'/>
       Market Stories
        </div>
      <div className=' my-4 text-sm flex justify-center p-2'>Sentiment</div>
      <div className=' my-4 text-sm flex justify-center  p-2'>Market</div>
      <div className=' my-4 text-sm flex justify-center  p-2'> Sector</div>
      <div className=' my-4 text-sm flex justify-center  p-2'>Watchlist </div>
      <div className=' my-4 text-sm flex justify-center  p-2'>Events </div>
      <div className=' my-4 text-sm flex justify-center  p-2'>News/Interview </div>

      </div>
  )
}

export default Sidebar