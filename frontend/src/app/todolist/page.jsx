import React from 'react'

const page = () => {
  return (
  <div className="w-360 h-256 px-10 py-20 bg-white inline-flex flex-col justify-start items-center gap-2.5">
  <div className="self-stretch flex flex-col justify-start items-center gap-7">
    <h1 className="self-stretch text-center justify-start text-black text-5xl font-bold font-['Inria_Serif']"> To do List</h1>
    <div className="self-stretch inline-flex justify-center items-center gap-8 flex-wrap content-center">
      <div className="inline-flex flex-col justify-start items-center gap-2.5">
        <input type="text" placeholder="Enter task"  className="w-208 h-20 rounded-[10px] placeholder:text-2xl placeholder:p-6 border-[1.50px] border-black" />
      </div>
      <button className="px-4 py-2.5 w-64 h-20 border-2 border-amber-50 bg-red-800 rounded-xl text-white text-5xl cursor-pointer hover:ring-2 ring-black font-bold font-['Inria_Serif']">Add Task</button>
    </div>
  </div>
</div>

  )
}

export default page