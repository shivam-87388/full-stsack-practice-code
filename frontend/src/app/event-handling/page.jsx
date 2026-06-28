'use client'
import React from 'react'


const page = () => {

const handleClick = ()=>{
    console.log("button clicked");
};
const handleClick2 = (e)=>{
    console.log("hello world",e.target);
};
    
  return (
    <div className="flex item-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center"> </div>
        <label>first name</label>
        <input></input>

    </div>
  )
}

export default page;

