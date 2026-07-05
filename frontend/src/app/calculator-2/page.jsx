import React from 'react'
import { IconDivide , IconX , IconBackspace , IconMinus , IconPlus } from '@tabler/icons-react';


const page = () => {
  return (
   <div className='w-full min-h-screen flex flex-col items-center justify-center'>

  {/* row-1 */}
    <div className="flex flex-row gap-3.5 bg-orange-300 p-2 ">
      <button className="flex-1 w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">AC</button>
      <button className=" flex-1 w-24  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">%</button>
      <button className="flex-1 flex items-center justify-center w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconBackspace/></button>
      <button className="flex-1  flex items-center justify-center w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconDivide/></button>
    </div>
    {/* row-2 */}
    <div className="flex flex-row gap-3.5 bg-orange-300 p-2 ">
      <button className="flex-1 w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">7</button>
      <button className=" flex-1 w-24  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">8</button>
      <button className="flex-1 flex items-center justify-center w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">9</button>
      <button className="flex-1  flex items-center justify-center w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconX/></button>
    </div>
{/* row-3 */}
    <div className="flex flex-row gap-3.5 bg-orange-300 p-2 ">
      <button className="flex-1 w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">4</button>
      <button className=" flex-1 w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">5</button>
      <button className="flex-1 flex items-center justify-center w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">6</button>
      <button className="flex-1  flex items-center justify-center w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconMinus/></button>
    </div>
    {/* row-4 */}
    <div className="flex flex-row gap-3.5 bg-orange-300 p-2 ">
      <button className="flex-1 w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">1</button>
      <button className=" flex-1 w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">2</button>
      <button className="flex-1 flex items-center justify-center w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">3</button>
      <button className="flex-1  flex items-center justify-center w-24 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconPlus/></button>
    </div>
   
    
   
    
    </div>
   


  )
}

export default page