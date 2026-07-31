"use client"
import React, { useState } from 'react'


const page = () => {
  const [showPassoword, setShowPassword] = useState(false);
  const handleClick = ()=>{
setShowPassword(!showPassoword)
  }
   
    

  return (
    <div className='flex items-center justify-center '>
      <div className="flex flex-col">
     <label htmlFor="user-password">Password</label>
     <div className=" flex flex-row  gap-1.5">
      {
showPassoword ? 
type="password":
type="text"
      }
<input  id="user-password" name="password" required className='border-2 border-black rounded-md px-2 focus:outline-0 py-0.5'></input>
<button type="button" onClick={handleClick} className='bg-gray-100 px-1.5 py-0.5 rounded-md w-fit hover:cursor-pointer'>show</button>


     </div>


      </div>
    </div>
  )
}

export default page