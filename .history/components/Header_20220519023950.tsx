import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
        <div className='relative h-10 w-20'>
            <Image objectFit='contain' src="https://links.papareact.com/fqy" layout='fill'></Image>
        </div>
    </div>
  )
}
