import React from 'react'

const todolist = () => {
  return (
    <div className="flex justify-center items-start w-full px-40 py-12 bg-white  gap-2.5">
      <div className="flex h-64 w-full lg:flex-col flex-row justify-start items-center gap-12">
        <h1 className="flex justify-start items-center flex-col text-black text-5xl font-bold font-['Inria_Serif'] gap-4">
          To do List
        <div className="flex justify-center items-start gap-10">
          <div className="flex-1 inline-flex flex-col justify-start items-center">
            <input className="self-stretch h-16 rounded-lg border-[1.50px] border-black" />
          </div>
          <button className="flex items-center justify-center  bg-red-800 rounded-lg text-center text-white text-5xl font-bold font-['Inria_Serif']">
            Add task
          </button>
        </div>
        </h1>
      </div>
    </div>
  );
}

export default todolist