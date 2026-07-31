"use client"
import React from 'react'


const page = () => {
   
    

  return (
    <div className='flex items-center justify-center '>
      <div className="flex flex-col">
     <label htmlFor="user-password">Password</label>
     <div className=" grid grid-cols-2 gap-0.5">
<input type="password" id="user-password" name="password" required className='border-2 border-black rounded-md px-2 focus:outline-0 py-0.5'></input>
<button className='bg-gray-200 px-1.5 py-0.5 rounded-md w-fit hover:cursor-pointer'>show</button>


     </div>


      </div>
    </div>
  )
}

export default page