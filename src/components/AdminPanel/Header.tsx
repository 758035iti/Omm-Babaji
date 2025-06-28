
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { logo } from '@/assets/Home';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='main-container flex justify-between items-center gap-6 h-16 shadow-black shadow-md'>
      <Link href='/' className='flex items-center gap-2'>
        <img src={logo.src} className='w-full h-14'/>
      </Link>
      <Link href={'/'} className='flex gap-5'>
        <NotificationsActiveIcon />
        <AccountCircleIcon/>
     </Link>
     
    </div>
  )
}
