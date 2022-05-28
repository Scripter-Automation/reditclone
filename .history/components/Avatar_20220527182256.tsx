import { useSession } from 'next-auth/react'
import React from 'react'

export default function Avatar() {

    const {data:session} = useSession()

  return (
    <div>
        <Image></Image>
    </div>
  )
}
