import Image from 'next/image'
import React from 'react'
import { BeakerIcon } from "@heroicons/react/solid"
import { StarIcon } from "@heroicons/react/outline"
export default function Header() {
  return (
    <div>
        <div className='relative h-10 w-20 flex-shrink-0'>
            <Image objectFit='contain' src="https://links.papareact.com/fqy" layout='fill'></Image>
        </div>
        <div></div>
    </div>
  )
}
