import React from 'react'
import performanceSrc from '../../../../public/28.jpg'
import Hero from '@/components/hero'
export const metadata = {
  title: 'Performance'
}
export default function page() {
  return (
    <Hero imgUrl={performanceSrc} altTxt='Performance' content='welcome to performance' />
  )
}
