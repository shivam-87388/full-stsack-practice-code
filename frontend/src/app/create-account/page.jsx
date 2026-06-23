import React from "react";

const page = () => {
  return (
    <main className=" flex items-center justify-center min-h-screen bg-gray-200">
      <form className="flex  flex-col justify-center bg-white p-4 rounded-lg ">
        <h1 className=" flex justify-center text-xl p-2 font-bold"> Create account</h1>
        <div className="flex flex-row justify-between gap-2.5">
          <div className="flex flex-col p-1 w-32">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              placeholder="john"
              require
              className="rounded-md border-gray-200 border-2 p-2"
            ></input>
           
          </div>
          <div className="flex flex-col p-1 w-32">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              placeholder="jix"
              require
              className="rounded-md  border-2 border-gray-200 p-2"
            ></input>
          </div>
        </div>

        <div className="flex items-start justify-start flex-col gap-0.5 p-1">
          <label htmlFor="user-email">Email</label>
          <input
            type="text"
            id="user-email"
            placeholder="example@gmail.com"
            className=" rounded-md border-2 border-gray-200 p-2  w-64"
          ></input>
        </div>
        <div className="flex flex-col gap-0.5 p-1 ">
          <label htmlFor="user-password">Password</label>
          <input
            type="password"
            id="user-password"
            placeholder="enter password"
            className="p-2 rounded-md border-2 border-gray-200 w-64"
          ></input>
        </div>
        <div className="flex justify-center items-center p-4 ">

        <button className="flex justify-center items-center bg-blue-600 w-fit px-2.5 py-2 rounded-md font-bold text-white hover:cursor-pointer">Create account</button>
        </div>

        <div className="flex "></div>
      </form>
    </main>
  );
};

export default page;
