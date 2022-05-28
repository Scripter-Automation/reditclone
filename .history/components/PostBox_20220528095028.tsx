import { LinkIcon, PhotographIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'

export default function PostBox() {
    const {data:session} = useSession()

  return (
    <form className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 '>
        <div className='flex items-center space-x-3'>
            <Avatar></Avatar>

            <input
                disabled={!session}
                className= "flex-1 rounded-md bg-gray-50 p-2 pl-5 outilne-none"
                type="text"
                placeholder={session ? 'Createa a post by entering a titile!':'Sign in to post'}
            >
            </input>

            <PhotographIcon className={`h-6 text-gray-300 cursor-pointer`}></PhotographIcon>
            <LinkIcon className='h-6 text-gray-300'></LinkIcon>
        </div>
    </form>
  )
}
