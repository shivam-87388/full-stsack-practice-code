import React from "react";
import { useState } from "react";

const page = () => {

  const [formdata , setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password:"",
    confirmPassword: "",
  });

  const handelChange = (e)=>{
    setFormdata( id, e.target.value)

  };
  const handelSubmit = ()=>{
    
  }
  
  return (
    <main className=" flex items-center justify-center min-h-screen bg-gray-200">
      <form className="flex  flex-col justify-center bg-white p-4 rounded-lg ">
        <div className="flex flex-col items-center justify-center ">
        <h1 className="text-xl font-bold">Create account</h1>
        <a href="https://example.com" className="text-sm text-blue-700 hover:text-blue-800 hover:underline hover:decoration-2">Already account ? Sign In</a>
        </div>
        <div className="flex flex-row justify-between gap-2.5">
          <div className="flex flex-col p-1 w-32">
            <label htmlFor="firstname">First Name</label>
            <input onChange={handelChange}
            id={firstname}
            value={e.firstname}
              type="text"
              id="firstname"
              placeholder="john"
              required
              className="rounded-md border-gray-200 border-2 p-2"
            />
           
          </div>
          <div className="flex flex-col p-1 w-32">
            <label htmlFor="lastname">Last Name</label>
            <input onChange={handelChange}
              type="text"
              id="lastname"
              placeholder="jix"
              required
              className="rounded-md  border-2 border-gray-200 p-2"
            />
          </div>
        </div>

        <div className="flex items-start justify-start flex-col gap-0.5 p-1">
          <label htmlFor="user-email">Email</label>
          <input onChange={handelChange}
            type="email"
            id="user-email"
            placeholder="example@gmail.com"
            className=" rounded-md border-2 border-gray-200 p-2  w-64"
          />
        </div>
        <div className="flex flex-col gap-0.5 p-1 ">
          <label htmlFor="user-password">Password</label>
          <input onChange={handelChange}
            type="password"
            id="user-password"
            placeholder="enter password"
            className="p-2 rounded-md border-2 border-gray-200 w-64"
          />
        </div>
        <div className="flex flex-col gap-0.5 p-1 ">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input onChange={handelChange}
            type="password"
            id="confirm-password"
            placeholder="enter confirm password"
            className="p-2 rounded-md border-2 border-gray-200 w-64"
          />
        </div>

        <div className="flex justify-center items-center p-4 ">
        <button onSubmit={handelSubmit} className="flex justify-center items-center bg-blue-600 w-fit px-2.5 py-2 rounded-md font-bold text-white hover:cursor-pointer">Create account</button>
        </div>
      </form>
    </main>
  );
};

export default page;
