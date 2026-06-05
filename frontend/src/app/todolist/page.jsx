'use client'
import React from 'react'
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const handelchange = ()=>{
};

const  handelclick = ()=>{
  
  
  
  
};

const todolist = () => {
  const [set, settask] = useState("");
  return (
   <div className=" items-center justify-center p-6 -full ">
    <h1 className="text-center text-black text-5xl font-bold font-['Inria_Serif'] p-2">To Do list</h1>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      <input onChange={handelchange} type="text" placeholder="enter task" className="md:w-lg w-64 py-2.5 px-2.5 text-2xl rounded-lg border-[1.50px] border-black"></input>
      <button onClick={handelclick} className="flex items-center justify-center px-2.5 py-1 text-nowrap bg-red-800 rounded-lg text-white text-5xl  font-bold font-['Inria_Serif']">Add task</button>
    </div>
   </div>
    
  );
}

export default todolist;