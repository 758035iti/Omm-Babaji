
import { back1 } from '@/assets/PujaServices'
import React from 'react'

export default function Section1() {
  return (
    <div className='w-full h-96 relative'>
      <img src={back1.src} className='w-full lg:h-[25rem] h-80'/>
      <p className='absolute md:text-4xl text-3xl text-white font-bold lg:top-40 top-24 lg:left-[40rem] left-28 md:left-72 '>Puja Services</p>
      <button className="bg-white rounded-lg absolute  flex justify-center items-center px-6 py-3 lg:top-[23rem] top-72 left-1/2 -translate-x-1/2">
          Home <span className="text-amber-300">About us </span>
        </button>
    </div>
  )
}
