import React from 'react'
import stories from '../data/stories.json'
import Image from "next/image";

const Stories = () => {
  return (
    <div>
       
        {stories.map((a)=>(
            <div key={a.id} className="bg-white my-4 w-full flex flex-col gap-1  px-4 py-3 border shadow-lg">
                <Image layout="responsive" height={100} width={100} alt="User Avatar"  src='/sunset.png'/>
                <div className='p-2'>
                    <h1 className='text-xl my-1 text-blue-800 font-semibold'>{a.title}</h1>
                    <p className='text-blue-700'>{a.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Stories