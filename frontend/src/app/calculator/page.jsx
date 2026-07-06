'use client'
import React, { useState } from 'react'
import { IconDivide , IconX , IconBackspace , IconMinus , IconPlus, IconEqual } from '@tabler/icons-react';


const page = () => {
  const [value, setValue] = useState();

  const handleClick =()=>{
  }

  return (
   <div className="w-full min-h-screen flex flex-col items-center justify-center p-5">

<div className="shadow-[0px_0px_35px_1px_rgba(0,0,0,0.25)] p-1.5 rounded-lg"> 
  <input className="text-end w-full h-24 text-3xl border-2 border-black p-2 text-black font-bold rounded-lg mb-2"/>
  
 {/* row-1 */}
    <div className="flex flex-row gap-3.5 p-2 rounded-md">
      <button className="flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">AC</button>
      <button className=" flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">%</button>
      <button className="flex-1 flex items-center justify-center bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconBackspace/></button>
      <button className="flex-1  flex items-center justify-center bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconDivide/></button>
    </div>
     {/* row-2 */}
    <div className="flex flex-row gap-3.5  p-2 ">
      <button onClick={()=>{handleClick("7")}} className="flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">7</button>
      <button onClick={()=>{handleClick("8") }} className="flex-1  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">8</button>
      <button onClick={()=>{handleClick("9")}} className="flex-1 flex items-center justify-center bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">9</button>
      <button onClick={()=>{handleClick("")}} className="flex-1  flex items-center justify-center bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconX/></button>
    </div>
    {/* row-3 */}
    <div className="flex flex-row gap-3.5  p-2 ">
      <button onClick={()=>{handleClick("4")}} className="flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">4</button>
      <button onClick={()=>{handleClick("5")}} className=" flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">5</button>
      <button onClick={()=>{handleClick("6")}} className="flex-1 flex items-center justify-center  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">6</button>
      <button className="flex-1  flex items-center justify-center  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconMinus/></button>
    </div>
 {/* row-4 */}
    <div className="flex flex-row gap-3.5  p-2 ">
      <button className="flex-1  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">1</button>
      <button className=" flex-1  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">2</button>
      <button className="flex-1 flex items-center justify-center  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">3</button>
      <button className="flex-1  flex items-center justify-center  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconPlus/></button>
    </div>
      {/* row-5 */}
    <div className="flex flex-row gap-3.5  p-2 ">
      <button className="flex-1  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">00</button>
      <button className=" flex-1  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">0</button>
      <button className="flex-1 flex items-center justify-center  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">.</button>
      <button className="flex-1  flex items-center justify-center  bg-[#FF7700] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconEqual color="white"/></button>
    </div>
    </div>
    


</div>
 
   

   
  
   


  )
}

export default page;