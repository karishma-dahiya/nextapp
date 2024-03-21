'use client';

import React, {useState} from "react";
import Sidebar from "@/components/Sidebar";
import Posts from "@/components/Posts";
import Stories from "@/components/Stories";


export default function Home() {
  const[showSidebar,setShowSidebar]=useState(false)
  const[showPosts,setShowPosts]=useState(true)
  return (
    <main className=" min-h-screen ">
     <div className='hidden lg:grid  grid-flow-col grid-cols-5 '>
      {showSidebar && (
        <Sidebar/>
      )}
      <div className={`${showSidebar ? 'col-span-2':'col-span-3'} hidden lg:block relative`}>

        <div className=" w-full p-4">
        <h1 className='lg:text-3xl  text-2xl my-2 text-center uppercase font-semibold text-red-500'>Discussion Forum</h1>
          
          <Posts/>
          <button className=" sticky bottom-44 h-32 w-6 left-0   bg-blue-950  font-bold text-xl  text-white py-7 " 
          onClick={()=>setShowSidebar(!showSidebar)}>{`>`}</button>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-4 p-4">
      <h1 className='lg:text-3xl text-center text-2xl uppercase font-semibold text-red-500 my-2'>Market Stories</h1>
        <Stories/>
      </div>
     </div>
     <div className="lg:hidden grid grid-flow-col grid-cols-3">
     {showSidebar && (
        <Sidebar/>
      )}
      <div className={`${showSidebar ? 'col-span-2' :'col-span-3'}`} >
       
       
        <div className='w-full bg-[#142841] flex text-white font-bold uppercase  justify-between'>
          <button className={`${showPosts ? '':'bg-[#1e375f]'} " text-white font-semibold py-4 px-2 w-1/2 text-lg"`} onClick={()=>setShowPosts(true)}>Discussion Form</button>
          <button className={`${showPosts ? 'bg-[#1e375f]':''} " text-white font-semibold py-4 px-2 w-1/2 text-lg"`} onClick={()=>setShowPosts(false)}>Market Stories</button>
        </div>
        
        {showPosts ? <Posts/>:<Stories/>}
        <button className=" sticky bottom-44 h-32 w-6   bg-blue-950  font-bold text-xl  text-white py-7 " 
          onClick={()=>setShowSidebar(!showSidebar)}
          >{`>`}</button>
      </div>
     </div>
    </main>
  );
}
