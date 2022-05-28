import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

type Props = {
    seed?: string
    large?: boolean
}

export default function Avatar({seed, large} : Props) {

    const {data:session} = useSession()

  return (
    <div className='relative h-10 w-10 rounded-full border-gray-300 bg-white '>
        <Image layout='fill' src={`https://avatars.dicebear.com/api/open-peeps/${seed || session?.user?.name || "placeholder"}.svg`}></Image>
    </div>
  )
}
