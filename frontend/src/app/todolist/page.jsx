'use client'
import React from 'react'
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';



const todolist = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handelchange = (e)=>{
    setTask(e.target.value);
     console.log(e.target.value); 
  };
  const  handelclick = ()=>{
    setTasks([tasks, task])
   console.log(tasks,task);
  };
  return (
    
   <div className=" items-center justify-center p-6 -full ">
    <h1 className="text-center text-black text-5xl font-bold font-['Inria_Serif'] p-2">To Do list</h1>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      <input onChange={handelchange} type="text" placeholder="enter task" className="md:w-lg w-64 py-2.5 px-2.5 text-2xl rounded-lg border-[1.50px] border-black"></input>
      <button onClick={handelclick} className="flex items-center justify-center px-2.5 py-1 text-nowrap cursor-pointer hover:ring-2 ring-black bg-red-800 rounded-lg text-white text-5xl border-2 boder-white  font-bold font-['Inria_Serif']">Add task</button>
      {
  tasks.map((item, index) => (
    <p key={index}>{item}</p>
  ))
}
    </div>
   </div>
    
  );
}

export default todolist;