'use client'
import React from 'react'
import { useState } from 'react'


const page = () => {
    const[data , setData] = useState({
        firstname: "",
        lastname: "",
    });
const handleChange = (e)=>{
    console.log(e.target.value);
    setData({...data, [e.target.name]: value})
    console.log({...data, setData})
    

};

    
  return (
    <div className="flex items-center justify-center min-h-screen">
       <div className="flex flex-col items-center justify-center gap-2 bg-amber-100 border-2 rounded-2xl border-amber-200 p-4">
        <div className="flex flex-col ">
        <label className="text-xl" htmlFor="firstname">
            first name
        </label> 
        <input value={data.firstname} name="firstname" onChange={handleChange} id="firstname" type="text"  placeholder='john' className=" rounded-md p-1.5 border-2 text-xl border-black" />
        </div>
        <div className="flex flex-col">
        <label htmlFor="lastname" className="text-xl">
            last name
        </label> 
        <input value={data.lastname} name="lastname" onChange={handleChange} id="lastname" type="text"  placeholder='fix' className="rounded-md p-1.5 border-2 text-xl border-black" />
        </div>

        <button className="text-xl bg-blue-600 hover:cursor-pointer px-2.5 py-2 text-white border-white border-2 rounded-md  hover:ring-2 ring-black"> submit</button>

       </div>
       


    </div>
  )
}

export default page;

