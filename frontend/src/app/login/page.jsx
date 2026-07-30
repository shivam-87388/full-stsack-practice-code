'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik';

const page = () => {
  // const [password, setPassword]= useState(false);
const loginform = useFormik({
  initialValues:{
    email:"",
    password:"",
  },
  onSubmit:(values)=>{
    console.log(values);

  },

  
});
  return (
   <div className="flex items-center justify-center min-h-screen">
    <form className="flex flex-col items-center justify-center p-4 bg-amber-100 shadow-lg rounded-md"> 
      <h1 className="font-bold text-xl">login form</h1>
      <div className="flex flex-col  justify-center mb-0.5">
      <label htmlFor="email">email</label>
      <input type="text" id="email" placeholder='email' className="border-2 borde-black rounded-md px-1.5 py-1 focus:outline-1 focus:outline-black"></input>
      <label htmlFor="email">password</label>
      <input type="password" id="password" placeholder="password" className="border-2 borde-black rounded-md px-1.5 py-1  focus:outline-1 focus:outline-black"></input>
      <button className="text-sm text-black  font-semibold rounded-md bg-gray-200 w-fit p-1.5">show</button>
      <a href='#' className='text-blue-600 text-sm text-right self-end mt-0.5'> forget password ?</a>
      </div>
      <button type="submit" className="w-full py-2 bg-blue-700 text-white rounded-md
             transition-transform duration-300 ease-in-out
             hover:scale-95 hover:cursor-pointer">login</button>
    </form>

   </div>
  )
}

export default page;