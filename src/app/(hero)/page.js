import React from 'react'
import homeSrc from '../../../public/09.jpg'
import Hero from '@/components/hero'
export const metadata = {
  title: 'Home',
}
export default function page() {
  return (
    <Hero imgUrl={homeSrc} altTxt='Home' content='welcome to our website'/>
  )
}

