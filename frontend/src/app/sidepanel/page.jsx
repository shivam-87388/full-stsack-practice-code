'use client'
import React, { useState } from 'react'
import {IconX, IconBaselineDensityMedium } from '@tabler/icons-react';


const page = () => {
    const [show,setShow] = useState(false);
    const handleClick =()=>{
        setShow(!show);
    }
  return (
    <div className="flex items-center justify-center ">
        <div className="flex flex-col bg-amber-200 p-2.5">
            <button type="button" onClick={handleClick}>{show? <IconBaselineDensityMedium/>:<IconX/>}
               
            </button>
            {
                (show)?
                 <ul className="">
            <li>home</li>
            <li>about</li>
            <li></li>
            <li>contact</li>
        </ul>:
        ""
            }
       
        </div>

        
        
    </div>
  )
}

export default page