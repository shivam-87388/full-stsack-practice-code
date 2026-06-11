'use client'
import React from 'react'
import { useState } from 'react'


const page = () => {
  const [name, setName] = useState([]);
  const handelChange = (element)=>{

  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <label  id="fname" className="text-2xl">enter something</label>
        <input  onChange={handelChange} type="text" id="fname" className="w-80 border-2 hover:cursor-pointer p-1.5 rounded-md text-2xl "></input>
    </div>
  )
}

export default page;