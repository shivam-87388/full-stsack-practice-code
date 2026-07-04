import React from 'react'
import { Icon, IconBackspace } from '@tabler/icons-react';


const page = () => {
  return (
    <div className="w-full min-h-screen p-2.5 bg-zinc-400 inline-flex justify-center items-center gap-2.5 overflow-hidden">
  <div className="w-56 h-116 max-w-56 pt-16 pb-2.5 bg-white rounded-xl flex justify-center items-center gap-2.5">
    <div className="flex-1 h-64 py-2 bg-white inline-flex flex-col justify-center items-center gap-3.5">
      <div className="self-stretch inline-flex justify-center items-center gap-3.5">
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-2.5">
          <div className="text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">AC</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-2.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">%</div>
        </div>
        <div className="w-8 h-9 px-1.5 py-1.5 bg-zinc-100 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden">
          <IconBackspace/>
        </div>
        <div className="w-8 h-9 px-1.5 py-1.5 bg-zinc-100 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden">
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-3.5 h-3.5 left-1.25 top-1.25 absolute outline-2 outline-offset-1 outline-black" />
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-center items-center gap-3.5">
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-2.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">7</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-2.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">8</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-2.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">9</div>
        </div>
        <div className="w-8 h-9 px-1.5 py-1.5 bg-zinc-100 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden">
          <div className="w-6 h-6 relative overflow-hidden">
            <div className="w-3 h-3 left-1.5 top-1.5 absolute outline-2 outline-offset-1 outline-black" />
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-center items-center gap-3.5">
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">4</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">5</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">6</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-zinc-100 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="self-stretch text-center justify-center text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">-</div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-center items-center gap-3.5">
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">1</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">2</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">3</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">+</div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-center items-center gap-3.5">
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">00</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">0</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">.</div>
        </div>
        <div className="w-8 px-1.5 py-1.5 bg-neutral-200/40 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-3.5">
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Arial_Rounded_MT_Bold']">=</div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default page