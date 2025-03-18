import { bg1 } from '@/assets/login'

import React from 'react'

export default function UserRegForm() {
  return (
    <div>
      <div className='w-full h-[40rem] relative'>
        <img src={bg1.src} className='w-full lg:h-[40rem] h-80 '/>
         <p className='absolute top-0 left-[38rem] text-4xl text-white font-bold mt-8 '>Register as a User</p>
      </div>
      <div className='flex justify-center items-center'>
        <form className='w-1/3 h-[29rem] bg-white mt-10 rounded-lg absolute top-48 left-1/2 -translate-x-1/2  p-3 gap-3 flex flex-col px-8'>
            Name: <input type='text' placeholder='Enter Your name'  required  className='bg-slate-200 '/>
            Email: <input type='email' placeholder='Enter Your Email' required  className='bg-slate-200'/>
            Phone: <input type='tel' placeholder='Enter Your Phone' required  className='bg-slate-200'/>
            Password: <input type='password' placeholder='Enter Your Password' required  className='bg-slate-200'/>
            confirmPassword: <input type='password' placeholder='Confirm Your Password' required  className='bg-slate-200'/>
            <button className='bg-blue-500 text-white rounded-lg p-2'>Register</button>
        </form>
      </div>
    </div>
  )
}
