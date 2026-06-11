import React from 'react'
import { useState } from 'react';

const [count, setCount] = useState(0);

const counter = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full">
        <h1>{count}</h1>
        <button className="flex justify-center items-center bg-emerald-700 text-2xl text-white px-3 py-2.5 rounded-lg">Count</button>

    </div>
  )
}

export default counter;