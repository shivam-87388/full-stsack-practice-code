import React from 'react'
import { IconDivide , IconX , IconBackspace } from '@tabler/icons-react';


const page = () => {
  return (
   <div className='w-full min-h-screen flex flex-col items-center justify-center'>
    <div className="flex flex-row gap-3.5 bg-orange-300 p-2 ">
      <button className="flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">AC</button>
      <button className=" flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">%</button>
      <button className="flex-1 flex items-center justify-center bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconBackspace/></button>
      <button className="flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconDivide/></button>
    </div>
    <div className="flex flex-row gap-3.5 bg-orange-300 p-2 ">
      <div className="bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">1</div>
      <div className="bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">1</div>
      <div className="bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">1</div>
      <div className="bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">1</div>
    </div>
    
   
    
    </div>
   


  )
}

export default page