import { section4Arr } from '@/utils/home'
import React from 'react'
import Link from 'next/link'

export default function Section4() {
  return (
    <div>
      <section className='w-full h-auto flex flex-col items-center justify-center gap-10'>
        <p className='text-4xl font-bold text-red-800 flex justify-center items-center'>Puja By Days</p>
        <div className='w-3/4 h-auto shadow-2xl shadow-black p-5'>
          <div className='w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 relative'>
            {
              section4Arr.map((item,index) => (
                <Link href={'/'} className='flex flex-col gap-5 text-center ' key={index} >
                  <img src={item.img.src} className='rounded-md'/>
                  <p className='text-2xl text-red-800 font-bold '>{item.title}</p>
                  <p className='font-bold'>{item.desc}</p>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}
