import React from 'react'

const page = () => {
  return (
   <main className=" flex items-center justify-center min-h-screen bg-gray-200">
    <form className="flex  flex-col bg-white p-4 rounded-lg ">
        <div className="flex flex-row gap-2.5">
             <div className="flex flex-col p-1 ">
           <label htmlFor='firstname'>First Name</label>
           <input type="text" id="firstname" placeholder="john" require className='rounded-md ring-2 p-2'></input>
        </div>
        <div className="flex flex-col p-1 ">
           <label htmlFor='firstname'>Last Name</label>
           <input type="text" id="firstname" placeholder="john" require className='rounded-md ring-2 p-2'></input>
        </div>
        </div>
       
        <div className="flex flex-col gap-0.5 p-1">
            <label htmlFor="user-email">Email</label>
            <input type="text" id="user-email" placeholder="example@gmail.com" className=" rounded-md ring-2 p-2"></input>
        </div>
        <div className="flex flex-col gap-0.5 p-1">
            <label htmlFor="user-password">Password</label>
            <input type="password" id="user-password" placeholder="enter password" className="p-2 rounded-md ring-2"></input>
        </div>

    <div className="flex ">

    
    </div>
    </form>
    
   </main>
  )
}

export default page