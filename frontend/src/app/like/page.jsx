'use client'
import React, { useState } from 'react';
import { IconHeart } from '@tabler/icons-react';


const page = () => {
  const [color,setColor] = useState(false);

  const handleClick = ()=>{
    setColor(!color);
  }
  return (
    <div className="flex items-center justify-center bg-amber-100 min-h-screen fil">
        <IconHeart onClick={handleClick} size={40}  className={`hover:cursor-pointer ${color ? "fill-red-500 stroke-red-500":"fill-white stroke-black"}`}/>

    </div>
  )
}

export default page