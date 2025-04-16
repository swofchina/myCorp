"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const linkData = [
  { name: 'Scale', path: '/scale' },
  { name: 'Performance', path: '/performance' },
  { name: 'Reliability', path: '/reliability' }
]
// const accessLink = ['/', '/performance', '/reliability', '/scale']
export default function Header() {
  const pathname = usePathname()
  // if (!accessLink.includes(pathname)) {
  //   return null
  // }
  return (
    <div className='absolute w-full z-10'>
      <div className='flex justify-between container mx-auto p-8 items-center'>
        <Link className='text-3xl font-bold' href='/'>Home</Link>
        <div className='text-xl space-x-4'>
          {linkData.map(link => (<Link key={link.path} className={pathname === link.path ? 'text-purple-500' : ''} href={link.path}>{link.name}</Link>))}
        </div>
      </div>

    </div>
  )
}
