import React from 'react'
import { navArr } from '@/utils/navbar'
import Link from 'next/link'

export default function SubHeader() {
  return (
    <div>
      <section className='hidden lg:block'>
        <div className='flex justify-end items-center gap-5 text-red-900 p-3 shadow-2xl shadow-black'>
            {
          navArr.map((item,key) => (
            <Link  key={item.id.toString()} href={`${item.url}`}>
              <p  key={item.id.toString()}  className='p-2 hover:text-black hover:underline text-lg font-bold'>{item.title}</p>
            </Link>
          ))
           }
        </div>
      </section>
    </div>
  )
}
