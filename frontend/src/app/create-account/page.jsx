'use client'
import React from 'react'
import { Formik } from 'formik'

const page = () => {
const formik = useFormik({
  initialValues:{
    firstname:"",
    lastname:"",
    password:"",
    confirmpassword:"",
  },
  
})
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="flex flex-col items-center justify-center p-4 bg-green-400 rounded-2xl ">
      <h1 className="text-white text-2xl font-bold mb-2.5"> Create Account</h1>
        <div className="flex flex-row  gap-3 w-full ">
          <div className="flex flex-col"> 
          <label htmlFor='firstname'className="text-white text-xl">First name</label>
          <input onChange={handleChange} placeholder="jhon" id="firstname" type="text" required className="text-xl text-white rounded-md border-2 border-white px-2.5 py-1 w-44"/> 
          </div>
          <div className="flex flex-col "> 
          <label htmlFor='lastname'className="text-white text-xl">Last name</label>
          <input onChange={handleChange} placeholder="park" id="lastname" type="text" className="text-xl text-white rounded-md border-2 border-white px-2.5 py-1 w-44"/> 
          </div>
        
        </div>
        <div className="flex flex-col  justify-center w-full">
        <label htmlFor='email' className="text-xl text-white">Email</label>
        <input onChange={handleChange} placeholder="xyz@gmail.com" id="email" required className="border-2 text-white text-xl border-white rounded-md px-2.5 py-1"/>
        </div>
        <div className="flex flex-col justify-center w-full mb-3">
        <label htmlFor='password' className="text-xl text-white">Password</label>
        <input onChange={handleChange} placeholder="enter password" id="password" required className="border-2 text-xl text-white border-white rounded-md px-2.5 py-1"/>
        </div>
        <div className="flex flex-col justify-center w-full mb-3">
        <label htmlFor='confirmpassword' className="text-xl text-white">Confirm Password</label>
        <input onChange={handleChange} placeholder="enter confirm password" required className="border-2 text-xl text-white border-white rounded-md px-2.5 py-1"/>
        </div>
        <button className="bg-yellow-300 px-2.5 py-2 rounded-md font-bold text-white text-xl" >submit</button>
       </form>
    </div>
  )
}

export default page