import Image from 'next/image'
import React from 'react'
import { BeakerIcon, ChevronDownIcon, HomeIcon, SearchIcon } from "@heroicons/react/solid"
import { StarIcon } from "@heroicons/react/outline"
export default function Header() {
  return (
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
        <div className='relative h-10 w-20 flex-shrink-0'>
            <Image objectFit='contain' src="https://links.papareact.com/fqy" layout='fill'></Image>
        </div>
        <div className='flex items-center mx-7 xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5'></HomeIcon>
            <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
            <ChevronDownIcon className='h-5 w-5'></ChevronDownIcon>
        </div>
        <form className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1'>
            <SearchIcon className='h-6 w-6 text-gray-400'/>
            <input type="text" placeholder="Search Reddit"></input>
            <button type="submit" hidden></button>
        </form>
    </div>
  )
}
