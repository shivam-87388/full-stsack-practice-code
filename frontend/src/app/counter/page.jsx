'use client'
import React from 'react'
import { useState } from "react";

const counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full">
        <h1 className="text-2xl ">{count}</h1>
        <button onClick={handelclick} className="flex justify-center items-center bg-emerald-700 text-2xl text-white px-3 py-2.5 rounded-lg">Count</button>

    </div>
  )
}

export default counter;