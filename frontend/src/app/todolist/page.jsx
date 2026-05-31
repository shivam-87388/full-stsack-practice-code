import React from 'react'

const page = () => {
  return (
  <div className="  w-full px-10 py-20 bg-white inline-flex flex-col justify-start items-center gap-2.5">
  <div className="self-stretch flex flex-col justify-start items-center gap-7">
    <h1 className="self-stretch text-center justify-start text-black text-5xl font-bold font-['Inria_Serif']"> To do List</h1>
    <div className="self-stretch inline-flex justify-center items-center gap-8 flex-wrap content-center">
      <div className="inline-flex flex-col justify-start items-center gap-2.5">
        <input type="text" placeholder="Enter the task" className="w-208 h-20 rounded-[10px] border-[1.50px]  border-black" />
      </div>
      <div className="w-64 h-20 px-4 py-2.5 bg-red-800 rounded-xl flex justify-center items-center gap-2.5">
        <button className="flex flex-1 w-48 text-center justify-start text-white text-5xl font-bold font-['Inria_Serif']">Add Task</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default page