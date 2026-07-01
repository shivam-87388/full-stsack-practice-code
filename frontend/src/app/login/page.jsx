/*
 * Add this to your HTML head:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
 */

/*function ExtractedItem({
  text10
}: any) {
  return <div className="w-[272px] h-full relative self-stretch grow-0 shrink-0 flex flex-col bg-[rgba(0,0,0,0)]">
            <span className="w-[272px] relative self-stretch grow-0 shrink-0 text-[clamp(14px,125%,20px)] font-bold leading-[24.204544067382812px] text-left text-black m-0">{text10}</span>
            <svg className="w-[272px] h-full relative self-stretch grow-0 shrink-0 rounded-[6px]" xmlns="http://www.w3.org/2000/svg" width={272} height={32} viewBox="-1 -1 274 34" preserveAspectRatio="none">
              <path d="M0 6C0 2.68629 2.68629 0 6 0L266 0C269.314 0 272 2.68629 272 6L272 26C272 29.3137 269.314 32 266 32L6.00001 32C2.6863 32 0 29.3137 0 26L0 6Z" fill="rgb(217, 217, 217)" fillRule="nonzero" />
              <path d="M6 0L6 1L266 1L266 0L266 -1L6 -1L6 0ZM272 6L271 6L271 26L272 26L273 26L273 6L272 6ZM266 32L266 31L6.00001 31L6.00001 32L6.00001 33L266 33L266 32ZM0 26L1 26L1 6L0 6L-1 6L-1 26L0 26ZM6.00001 32L6.00001 31C3.23858 31 1 28.7614 1 26L0 26L-1 26C-1 29.866 2.13401 33 6.00001 33L6.00001 32ZM272 26L271 26C271 28.7614 268.761 31 266 31L266 32L266 33C269.866 33 273 29.866 273 26L272 26ZM266 0L266 1C268.761 1 271 3.23858 271 6L272 6L273 6C273 2.13401 269.866 -1 266 -1L266 0ZM6 0L6 -1C2.13401 -1 -1 2.13401 -1 6L0 6L1 6C1 3.23858 3.23858 1 6 1L6 0Z" fill="rgb(0, 0, 0)" fillRule="nonzero" />
            </svg>
          </div>;
}
const page = () => {
  return <div className="relative w-full min-h-[789px] flex flex-row justify-center items-center gap-[10px] bg-white px-[512px] py-[248px]">
  <div className="w-[320px] h-[528px] relative grow-0 shrink-0 flex flex-col gap-[10px] bg-[rgba(217,217,217,1)] pt-[56px] pb-[92px] px-[24px] rounded-[21px]">
    <div className="w-[272px] h-full relative self-stretch grow-0 shrink-0 flex flex-col items-center gap-[80px] bg-[rgba(0,0,0,0)]">
      <span className="w-[272px] relative self-stretch grow-0 shrink-0 text-[clamp(14px,125%,20px)] font-bold leading-[24.204544067382812px] text-center text-black m-0">Login </span>
      <div className="w-[272px] h-full relative self-stretch grow-0 shrink-0 flex flex-col items-center gap-[96px] bg-[rgba(0,0,0,0)]">
        <div className="w-[272px] h-full relative self-stretch grow-0 shrink-0 flex flex-col gap-[24px] bg-[rgba(0,0,0,0)]">
          <ExtractedItem text10={"Email"} />
          <ExtractedItem text10={"Password"} />
        </div>
        <div className="w-[90px] h-[44px] relative grow-0 shrink-0 flex flex-row justify-center items-center gap-[10px] bg-[rgba(34,76,191,1)] px-[17.5px] py-[10px] rounded-[5px]">
          <span className="w-[55px] relative grow-0 shrink-0 text-[clamp(14px,125%,20px)] font-bold leading-[24.204544067382812px] text-left text-white m-0">Login</span>
        </div>
      </div>
    </div>
  </div>
  </div>;
};
export default page; */
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
   <div className="min-h-screen w-full bg-white inline-flex justify-center items-center gap-2.5">
  <div className="w-80 h-132 max-w-80 min-w-80 px-6 pt-14 pb-24 bg-zinc-300 rounded-3xl inline-flex flex-col justify-start items-start gap-2.5">
    <div className="self-stretch flex flex-col justify-start items-center gap-20">
      <h1 className="self-stretch text-center justify-start text-black text-2xl font-bold font-['Inter']">Login </h1>
      <form onSubmit={loginform.handleSubmit} className="self-stretch flex flex-col justify-start items-center gap-24">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start">
            <label htmlFor="email" className="self-stretch justify-start text-black text-xl font-bold font-['Inter']">Email </label>
            <input id="email" value={loginform.values.email} name="email" onChange={loginform.handleChange} type="email" placeholder="email" className="self-stretch h-8 p-2 bg-zinc-300 rounded-md border border-black" />
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <label htmlFor="password" className="self-stretch justify-start text-black text-xl font-bold font-['Inter']">Password </label>
            <input id="password" value={loginform.values.password} name="password" onChange={loginform.handleChange} type="password" placeholder="password" className="self-stretch h-8 p-2 bg-zinc-300 rounded-md border border-black" />
          </div>
        </div>
        <button type="submit" className="flex justify-center items-center w-full px-4 py-2.5 bg-blue-800 rounded-[5px] gap-2.5 text-white text-xl font-bold font-['Inter'] ">Log in
        
        </button>
      </form>
    </div>
  </div>
</div>
  )
}

export default page;