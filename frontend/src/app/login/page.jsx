'use client'
import React from 'react'
import { useFormik } from 'formik';

const page = () => {
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
      <input type="text" id="email" className="border-2 borde-black rounded-md px-1.5 py-1"></input>
      </div>
      <div className="flex flex-col  justify-center mb-3">
      <label htmlFor="email">password</label>
      <input type="text" id="password" className="border-2 borde-black rounded-md px-1.5 py-1"></input>
      </div>
      <button className="text-xl  text-white font-light bg-blue-700 rounded-md w-full py-2 ">login</button>
    </form>

   </div>
  )
}

export default page;