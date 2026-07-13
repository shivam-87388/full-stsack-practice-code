'use client'
import React, { useState } from 'react'
import { IconBackspace } from '@tabler/icons-react';


const page = () => {
  const [value, setvalues] = useState("");
  

  const handleClick =(e)=>{
    setvalues((previous)=> previous + e.target.value);  
    console.log((previous)=> previous + e.target.value);  
  };
  const handleClear = ()=>{
    setvalues("");
  };
  const handelBackspace = ()=>{
    setvalues(value.slice(0,-1));
  };
  const handleCalculate = () => {
    try {
      if (value.trim() === "") return;
      const result = new Function(`return ${value}`)();
      setvalues(String(result));
    } catch (error) {
      setvalues("Error");
    }
  };

  return (
   <div className="w-full min-h-screen flex flex-col items-center justify-center p-5">

<div className="shadow-[0px_0px_35px_1px_rgba(0,0,0,0.25)] p-1.5 rounded-lg"> 
  <input type="text" value={value} placeholder="0" readOnly className="text-end w-full h-24 text-3xl border-2 border-black p-2 text-black font-bold rounded-lg mb-2"/>
  
  
 {/* row-1 */}
    <div className="flex flex-row gap-3.5 p-2 rounded-md">
      <button value={value} onClick={handleClear} className="flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">AC</button>
      <button value="%" onClick={handleClick} className=" flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">%</button>
      <button onClick={handelBackspace} className="flex-1 flex items-center justify-center bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]"><IconBackspace/></button>
      <button value="/" onClick={handleClick} className="flex-1  flex items-center justify-center bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">/</button>
    </div>
     {/* row-2 */}
    <div className="flex flex-row gap-3.5  p-2 ">
      <button value="7" onClick={handleClick} className="flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">7</button>
      <button value="8" onClick={handleClick} className="flex-1  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">8</button>
      <button value="9" onClick={handleClick} className="flex-1 flex items-center justify-center bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">9</button>
      <button value="*" onClick={handleClick} className="flex-1  flex items-center justify-center bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">*</button>
    </div>
    {/* row-3 */}
    <div className="flex flex-row gap-3.5  p-2 ">
      <button value="4" onClick={handleClick} className="flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">4</button>
      <button value="5" onClick={handleClick} className=" flex-1 bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">5</button>
      <button value="6" onClick={handleClick} className="flex-1 flex items-center justify-center  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">6</button>
      <button value="-" onClick={handleClick} className="flex-1  flex items-center justify-center  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">-</button>
    </div>
 {/* row-4 */}
    <div className="flex flex-row gap-3.5  p-2 ">
      <button value="1" onClick={handleClick} className="flex-1  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">1</button>
      <button value="2" onClick={handleClick} className=" flex-1  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">2</button>
      <button value="3" onClick={handleClick} className="flex-1 flex items-center justify-center  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">3</button>
      <button value="+" onClick={handleClick} className="flex-1  flex items-center justify-center  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">+</button>
    </div>
      {/* row-5 */}
    <div className="flex flex-row gap-3.5  p-2 ">
      <button value="00" onClick={handleClick} className="flex-1  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">00</button>
      <button value="0" onClick={handleClick} className=" flex-1  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">0</button>
      <button value="." onClick={handleClick} className="flex-1 flex items-center justify-center  bg-[#DFDFDF] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">.</button>
      <button value="=" onClick={handleCalculate} className="flex-1  flex items-center justify-center  bg-[#FF7700] px-4 py-2.5 rounded-lg text-xl font-bold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] text-white">=</button>
    </div>
    </div>
    


</div>
 
   

   
  
   


  )
}

export default page;