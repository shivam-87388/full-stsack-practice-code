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
   <div className="flex items-center justify-center h">
    <form className="flex flex-col items-center justify-center p-4 bg-amber-100"> 
      <h1 className="font-bold text-xl">login form</h1>
      <div className="flex flex-col items-center justify-center">
      <label>email</label>

      </div>
    </form>

   </div>
  )
}

export default page;