'use client'
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [task, setTaks] = useState("");
  const [tasks, setTakss] = useState([]);


  const handelChange = (e)=>{
    setTaks(e.target.value);
    console.log(e.target.value);
    
  };
 const handelAdd = ()=>{
  setTakss([...tasks,task]);
  console.log([...tasks,task]);

 };



  return (
    <div className="flex flex-col justify-center items-center w-full h-screen space-y-2">
      <label  id="fname" className="text-2xl ">enter something</label>
        <input key={setTaks}  onChange={handelChange} type="text" id="fname" className="w-80 border-2 hover:cursor-pointer p-1.5 rounded-md text-2xl "></input>
        <button onClick={handelAdd} className="flex justify-center items-center text-2xl px-2.5 py-2 bg-amber-400 rounded-md">submit</button>

<div>
  {tasks.map((item,index)=>{
    return
    <p key={index}>{item}</p>

  })};
</div>
    </div>
  )
}

export default page;