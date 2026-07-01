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
   <div className="min-h-screen w-full bg-white inline-flex justify-center items-center gap-2.5">
  <div className="w-80 h-132 max-w-80 min-w-80 px-6 pt-14 pb-24 bg-zinc-300 rounded-3xl inline-flex flex-col justify-start items-start gap-2.5">
    <div className="self-stretch flex flex-col justify-start items-center gap-20">
      <h1 className="self-stretch text-center justify-start text-black text-2xl font-bold font-['Inter']">Login </h1>
      <form onSubmit={loginform.handleSubmit} className="self-stretch flex flex-col justify-start items-center gap-24">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start">
            <label htmlFor="email" className="self-stretch justify-start text-black text-xl font-bold font-['Inter']">Email </label>
            <input id="email" value={loginform.values.email} name="email" onChange={loginform.handleChange} type="email" placeholder="email" className="self-stretch h-8 p-2 bg-zinc-300 rounded-md border border-black" />
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <label htmlFor="password" className="self-stretch justify-start text-black text-xl font-bold font-['Inter']">Password </label>
            <input id="password" value={loginform.values.password} name="password" onChange={loginform.handleChange} type="password" placeholder="password" className="self-stretch h-8 p-2 bg-zinc-300 rounded-md border border-black" />
          </div>
        </div>
        <button type="submit" className="flex justify-center items-center w-full px-4 py-2.5 bg-blue-800 rounded-[5px] gap-2.5 text-white text-xl font-bold font-['Inter'] ">Log in
        
        </button>
      </form>
    </div>
  </div>
</div>
  )
}

export default page;