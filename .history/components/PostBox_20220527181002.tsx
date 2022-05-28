import { useSession } from 'next-auth/react'
import React from 'react'

export default function PostBox() {
    const {data:session} = useSession()

  return (
    <div>PostBox</div>
  )
}
