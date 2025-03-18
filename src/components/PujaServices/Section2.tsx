import { pujaServicesArr } from '@/utils/pujaServices'
import Link from 'next/link'
import React from 'react'

export default function Section2() {
  return (
    <div className='w-full h-full flex justify-center items-center '>
      <section className='w-3/4  h-auto justify-center items-center shadow-black shadow-2xl'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 p-5'>
        {
            pujaServicesArr.map((item, index) => (
                <Link href={`${item.path}`} key={index} className='flex flex-col gap-3'>
                    <img src={item.img.src} className='w-full h-52'/>
                    <p className='text-center text-red-800 font-bold text-2xl hover:underline hover:text-black'>{item.title}</p>
                </Link>
            ))
        }
      </div>

      </section>
    </div>
  )
}
