import React from 'react'
import { IconSun, IconMoon } from '@tabler/icons-react';

const Togglelight = () => {
  return (
    <div className="flex items-center justify-center  w-full h-screen ">
        <div className="flex items-center justify-center bg-amber-100 rounded-full border-2 border-black gap-2 px-3 py-2.5">
        <button className="hover:cursor-pointer hover:bg-amber-200"><IconSun stroke={2}  size={25} /></button>
        <button className="hover:cursor-pointer hover:fill-black"><IconMoon stroke={2} size={25}/></button>
        </div>
    

    </div>
  )
}

export default Togglelight;