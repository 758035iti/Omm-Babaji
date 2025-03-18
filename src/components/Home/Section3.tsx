import { rath } from '@/assets/Home'
import React from 'react'

export default function Section3() {
  return (
    <div>
      <section>
        <div className="relative w-full h-96 text-center mt-5"> 
            <img src={rath.src} className="w-full h-full object-cover" alt="Rath Yatra"/>
            <div className='absolute inset-0 w-full flex items-center justify-center'>
            <p className=" md:w-1/2 w-80 lg:text-5xl text-4xl text-white font-bold">
            हरे कृष्ण हरे कृष्ण | कृष्ण कृष्ण हरे हरे |
            हरे राम हरे राम | राम राम हरे हरे |
            </p>
            </div>
        </div>
      </section>
    </div>
  )
}
