"use client"
import React, { useState } from 'react'


const page = () => {
    const [hide,setHide] = useState(false);
    const 
    const handelClick = ()=>{
        setHide(!hide);
    }
    

  return (
    <div>
        <button type="button" onClick={handelClick}>show</button>
        {
           (hide) ?
           <p className="flex justify-center bg-amber-200">welcome to singh tect</p>
           
           
           : 
           ""


        }
    </div>
  )
}

export default page