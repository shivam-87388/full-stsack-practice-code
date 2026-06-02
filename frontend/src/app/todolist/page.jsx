import React from 'react'

const page = () => {
  return (
 <div className="w-[1440px] h-[1024px] px-40 py-12 bg-white inline-flex justify-center items-start gap-2.5">
  <div className="flex-1 h-64 inline-flex flex-col justify-start items-center gap-12">
    <div className="self-stretch text-center justify-start text-black text-5xl font-bold font-['Inria_Serif']">To do List</div>
    <div className="self-stretch px-9 inline-flex justify-center items-start gap-10">
      <div className="flex-1 inline-flex flex-col justify-start items-center">
        <div className="self-stretch h-16 rounded-lg border-[1.50px] border-black" />
      </div>
      <div className="px-2.5 py-1 bg-red-800 rounded-lg flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-white text-5xl font-bold font-['Inria_Serif']">Add task</div>
      </div>
    </div>
  </div>
</div>

  )
}

export default page