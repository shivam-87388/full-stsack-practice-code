'use client'
import React from 'react'
import { useState } from "react";
import





const todolist = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handelchange = (e)=>{
    setTask(e.target.value);
     console.log(e.target.value); 
  };
  const  handelclick = ()=>{
    setTasks([...tasks, task])
   console.log(...tasks,task);
  };
  return (
    
   <div className=" flex items-center justify-center p-6 flex-col w-full">
    <h1 className="text-center text-black text-5xl font-bold font-['Inria_Serif'] p-2">To Do list</h1>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      <input value={task} onChange={handelchange} type="text" placeholder="enter task" className="md:w-lg w-64 h-14 px-4.5 text-2xl rounded-lg border-2 border-black"></input>
      <button onClick={handelclick} className="flex items-center justify-center px-6 h-14 text-nowrap cursor-pointer hover:ring-2 ring-black bg-red-800 rounded-lg text-white text-xl md:text-2xl border-2 boder-white  font-bold font-['Inria_Serif']">Add task</button>
    </div>
     <div className="flex items-center justify-center flex-col gap-4 mt-5 lg:w-1/2 w-full bg-amber-200 rounded-2xl px-4 py-3">
       {tasks.map((item, index) => {
        return <p key={index} className="w-full text-2xl border-2 text-black border-black  rounded-2xl p-2.5 ">{item}</p>

       })}
      </div>
     
   </div>
    
  );
}

export default todolist;