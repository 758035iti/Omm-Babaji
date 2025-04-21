
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <section className='bg-red-900 text-white hidden lg:block'>
        <div className='flex justify-center items-center p-4 gap-7'>
            <p className='text-md'>Verified Pandit at Your Doorstep </p>
            <Link href='/'>
            <button className='bg-white text-red-900 p-2 rounded-3xl'>Book Now</button>
            </Link>
        {/* {
          navArr.map((item,key) => (
            <a key={item.id.toString()} href={`item.url`} className='p-2 hover:text-black hover:underline text-xl'>{item.title}</a>
          ))
        } */}
        </div>
      </section>
    </div>
  )
}
