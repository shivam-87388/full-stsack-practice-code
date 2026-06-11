import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <label  id="fname" className="text-2xl">enter something</label>
        <input type="text" id="fname" className="w-80 border-2 p-1.5 rounded-md text-2xl"></input>
    </div>
  )
}

export default page;