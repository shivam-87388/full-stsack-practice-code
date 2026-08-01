import React, { useState } from 'react'
import { IconSun, IconMoon } from '@tabler/icons-react';

const Togglelight = () => {
  const [light,setLight] = useState();

  return (
    <div className="flex items-center justify-center  w-full h-screen ">
        <div className="flex items-center justify-center bg-amber-100 rounded-full border-2 border-black gap-2 px-3 py-2.5">
        <button type="button" className="hover:cursor-pointer"><IconSun stroke={2}  size={25} /></button>
        <button type="button" className="hover:cursor-pointer hover:fill-black"><IconMoon stroke={2} size={25}/></button>
        </div>
    </div>
  )
}

export default Togglelight;