import Image from 'next/image'
import React from 'react'
import { BeakerIcon, ChevronDownIcon, HomeIcon } from "@heroicons/react/solid"
import { StarIcon } from "@heroicons/react/outline"
export default function Header() {
  return (
    <div className='flex bg-white px-4 py-2 shadow-sm'>
        <div className='relative h-10 w-20 flex-shrink-0'>
            <Image objectFit='contain' src="https://links.papareact.com/fqy" layout='fill'></Image>
        </div>
        <div className='flex items-center mx-7'>
            <HomeIcon className='h-5 w-5'></HomeIcon>
            <p>Home</p>
            <ChevronDownIcon className='h-5 w-5'></ChevronDownIcon>
        </div>
    </div>
  )
}
