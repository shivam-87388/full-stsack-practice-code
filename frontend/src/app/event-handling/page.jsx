'use client'
import React from 'react'


const page = () => {

const handleClick = ()=>{
    console.log("button clicked");
};
    
  return (
    <div className="flex justify-center items-center-center min-h-screen">
        <div className="flex items-center justify-center"> 

        <button onClick={handleClick} className=" flex items-center justify-center px-2.5  border-2 border-black rounded-md hover:cursor-pointer bg-blue-800 text-white text-2xl">submit</button>
        </div>
    </div>
  )
}

export default page;

