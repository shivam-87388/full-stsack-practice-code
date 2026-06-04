import React from 'react'

const todolist = () => {
  return (
   <div className="w-full px-40 py-12 bg-white flex justify-center items-start gap-2.5">
  <div className="flex-1 h-64 inline-flex flex-col justify-start items-center gap-12">
    <h1 className="flex  text-center justify-start text-black text-5xl font-bold font-['Inria_Serif']">To do List</h1>
    <div className="self-stretch  inline-flex justify-center items-start gap-10">
      <div className="flex-1 inline-flex flex-col justify-start items-center">
        <div className="self-stretch h-16 rounded-lg border-[1.50px] border-black" />
      </div>
      
        <button className="flex items-center justify-center px-2.5 py-2.5 bg-red-800 rounded-lg text-center text-white text-5xl font-bold font-['Inria_Serif']">Add task</button>
      
    </div>
  </div>
</div>
  )
}

export default todolist