import React from 'react'
import reliabilitySrc from '../../../../public/27.png'
import Hero from '@/components/hero'
export const metadata = { title: 'Reliability' }
export default function page() {
  return (
    <div>
      <Hero imgUrl={reliabilitySrc} altTxt='Reliability' content='welcome to Reliability' />
    </div>
  )
}
