import React from 'react'
import scaleSrc from '../../../../public/24.jpg'
import Hero from '@/components/hero'
export const metadata = { title: 'Scale' }
export default function page() {
  return (
    <Hero imgUrl={scaleSrc} altTxt='Scale' content='welcome to Scale' />
  )
}
