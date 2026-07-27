'use client'
import React from 'react'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
const page = () => {
const createaccount = useFormik({
  initialValues:{
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:"",
  },
  onSubmit:async(values)=>{
    console.log(values);
    if (values.password !== values.confirmpassword) {
      toast.error("password is not same");
    }
try{
    const response = await axios.post("http://localhost:5000/account/create-account",{values});
     console.log(response.data.message);
}
     catch (error){
  console.log(error.message);

}

  },
});
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F0F4F9]">
      <Toaster position="top-center"/>
      <form  onSubmit={createaccount.handleSubmit} className="flex flex-col items-center justify-center p-4 bg-white shadow-2xl rounded-2xl ">
      <h1 className="text-black text-2xl font-bold mb-2.5"> Create Account</h1>
        <div className="flex flex-row  gap-3 w-full mb-1">
          <div className="flex flex-col"> 
          <label htmlFor='firstname'className="text-black text-base">First name</label>
          <input onChange={createaccount.handleChange} value={createaccount.values.firstname} name="firstname" placeholder="jhon" id="firstname" type="text" required className="text-base text-black rounded-md border-2 border-black px-2.5 py-1 w-44 focus:outline-1 focus:outline-black "/> 
          </div>
          <div className="flex flex-col"> 
          <label htmlFor='lastname'className="text-black text-base">Last name</label>
          <input onChange={createaccount.handleChange} value={createaccount.values.lastname} name="lastname" placeholder="park" id="lastname" type="text" className="text-base text-black rounded-md border-2 border-black px-2.5 py-1 w-44 focus:outline-1 focus:outline-black "/> 
          </div>
        
        </div>
        <div className="flex flex-col  justify-center w-full mb-1">
        <label htmlFor='email' className="text-base text-black">Email</label>
        <input onChange={createaccount.handleChange} value={createaccount.values.email} name="email" placeholder="xyz@gmail.com" id="email" required className="border-2 text-black text-base border-black rounded-md px-2.5 py-1 focus:outline-1 focus:outline-black "/>
        </div>
        <div className="flex flex-col justify-center w-full mb-1">
        <label htmlFor='password' className="text-base text-black">Password</label>
        <input onChange={createaccount.handleChange} value={createaccount.values.password} name="password" placeholder="enter password" id="password" required className="border-2 text-base text-black border-black rounded-md px-2.5 py-1 focus:outline-1 focus:outline-black "/>
        </div>
        <div className="flex flex-col justify-center w-full mb-3.5">
        <label htmlFor="confirmpassword"  className="text-base text-black">Confirm Password</label>
        <input onChange={createaccount.handleChange} name="confirmpassword" value={createaccount.values.confirmpassword} id="confirmpassword" placeholder="enter confirm password" required className="border-2 text-base text-black border-black rounded-md px-2.5 py-1 focus:outline-1 focus:outline-black "/>
        </div>
        <button type="submit" className="bg-blue-800 w-full px-2.5 py-2 rounded-md font-bold text-white text-lg border-2 transition delay-150 duration-350 hover:scale-97 hover:cursor-pointer hover:ring-2 ring-black " >submit</button>
       </form>
    </div>
  )
}

export default page