import React from 'react'

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="flex flex-col items-center justify-center p-4 bg-green-400 rounded-2xl">
      <h1 className="text-white text-2xl font-bold"> Create Account</h1>
        <div className="flex flex-col items-start justify-center">
          <label htmlFor='firstname'className="text-white text-xl">First name</label>
          <input id="firstname" type="text" className="text-xl rounded-md border-2 border-white"/> 

        </div>
        <div className="flex flex-col  justify-center">
        <label htmlFor='email' className="text-xl text-white">Email</label>
        <input className="border-2 border-white rounded-md"/>
        </div>
        <div className="flex flex-col  justify-center">
        <label htmlFor='password' className="text-xl text-white">Password</label>
        <input className="border-2 border-white rounded-md"/>
        </div>
       </form>
    </div>
  )
}

export default page