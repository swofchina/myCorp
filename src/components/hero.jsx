import React from 'react'
import Image from 'next/image'
export default function Hero(props) {
  const { imgUrl, altTxt, content } = props
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image src={imgUrl} fill style={{ objectFit: 'cover' }} alt={altTxt} />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-800'></div>
      </div>
      <div className='flex justify-center pt-48'>
        <h1 className='text-white text-6xl'>{content}</h1>
      </div>
    </div>
  )
}
