import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'

export default function PostBox() {
    const {data:session} = useSession()

  return (
    <form>
        <div className='flex items-center space-x-3'>
            <Avatar></Avatar>

            <input
                disabled={!session}
                className= "flex-1 rounded-md bg-gray-50 p-2 pl-5 outilne-none"
                type="text"
                placeholder={session ? 'Createa a post by entering a titile!':'Sign in to post'}
            >
            </input>
        </div>
    </form>
  )
}
