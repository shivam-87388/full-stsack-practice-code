import React from 'react'

const todolist = () => {
  return (
   <div className=" items-center justify-center p-6 -full ">
    <h1 className="text-center text-black text-5xl font-bold font-['Inria_Serif']">To Do list</h1>
    <div className="flex flex-row sm:flex-col justify-center items-center gap-4">
      <input type="text" placeholder="enter task" className="w-1/2 py-2 px-2.5 text-2xl rounded-lg border-[1.50px] border-black"></input>
      <button className="px-2.5 py-1 bg-red-800 rounded-lg text-white text-5xl font-bold font-['Inria_Serif']">Add task</button>
    </div>
   </div>
    
  );
}

export default todolist