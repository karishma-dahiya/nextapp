import React from 'react'
import posts from '../data/posts.json'
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

const Posts = () => {
  return (
    <div>
            {posts.map(a=>(
              <div key={a.id} className="bg-white my-4 w-full flex gap-4 lg:gap-2   px-4 py-3 border shadow-lg">
                <div>
                  <Image width={60} height={40} alt="User Avatar"  src='/user.png'/>
                </div>
                <div className='p-2 '>
                  <div className="flex flex-row">
                    <h5 className='font-semibold lg:me-5 me-2 whitespace-nowrap'>{a.username}</h5>
                    <div className="text-xs text-center p-1 text-white h-6 w-30 rounded-full bg-blue-600">
                      <p >{a.location}</p>
                    </div>
                  </div>
                  <p className="lg:text-sm text-xs">
                    {a.text}
                  </p>
                  <div className="flex flex-row my-2 justify-between flex-wrap gap-x-4 gap-y-2 ">
                    <div className="flex content-center">
                        <AiOutlineHeart className='lg:text-2xl text-lg lg:mx-1 '/>
                        <span className="text-center lg:text-sm text-xs"> {a.likes}</span>
                    </div>
                    <div className="flex content-center">
                        < AiOutlineEye className='lg:text-2xl text-lg lg:mx-1'/>
                        <span className="text-center lg:text-sm text-xs"> {a.views}</span>
                    </div>
                    <div className="flex content-center">
                        <BiComment className='lg:text-2xl text-lg lg:mx-1'/>
                        <span className="text-center lg:text-sm text-xs whitespace-nowrap"> {a.comments} comments</span>
                    </div>
                    <div className="flex content-center">
                        <BsShare className='lg:text-xl text-lg lg:mx-1.5'/>
                        <span className="text-center lg:text-sm text-xs"> share</span>
                    </div>
                  </div>
                </div>
                <div className='text-xs text-blue-600 flex-shrink-0 whitespace-nowrap'>{a.lastSeen}</div>
              </div>
            ))}
          </div>
  )
}

export default Posts