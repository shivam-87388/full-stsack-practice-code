import React from 'react'

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="flex flex-col items-center justify-center p-4 bg-green-400 rounded-2xl">
        <div className="flex flex-row">
          <label htmlFor='firstname'>First name</label>
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