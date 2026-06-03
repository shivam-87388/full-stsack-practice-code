import React from 'react'

const page = () => {
  return (
    
 <div className=" w-full  px-40 py-12 bg-white   justify-center items-start gap-2.5">
  <div className="flex-1 h-64 flex flex-col justify-start items-center gap-12">
    <div className="self-stretch text-center justify-start text-black text-5xl font-bold font-['Inria_Serif']">To do List</div>
    <div className="self-stretch px-9 flex md:flex-row flex-col justify-center items-center gap-10">
      <div className="flex-1 flex flex-col  justify-start items-center">
        <input placeholder="enter the task" className="px-6 text-2xl  self-stretch h-16 rounded-lg border-[1.50px] border-black" />
      </div>
      <div className=" flex px-6 h-16 bg-red-800 rounded-lg  justify-center items-center gap-2.5 border-2 border-white hover:ring-2 ring-black cursor-pointer">
        <button className="text-center  justify-start text-white text-5xl font-bold font-['Inria_Serif'] cursor-pointer ">Add task</button>
      </div>
    </div>
  </div>
</div>



  )
}

export default page