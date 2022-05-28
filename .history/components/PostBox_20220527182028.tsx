import { useSession } from 'next-auth/react'
import React from 'react'

export default function PostBox() {
    const {data:session} = useSession()

  return (
    <form>
        <div>

            <input
                disabled={!session}
                className= "flex-1 rounded-md bg-gray-50 p-2 pl-2 outilne-none"
                type="text"
                placeholder={session ? 'Createa a post by entering a titile!':'Sign in to post'}
            >
            </input>
        </div>
    </form>
  )
}
