import Section1 from '@/components/PujaServices/Section1'
import Section2 from '@/components/PujaServices/Section2'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col gap-20'>
      <Section1/>
      <Section2/>
    </div>
  )
}
