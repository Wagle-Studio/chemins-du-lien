import './style.scss'
import React from 'react'
import Image from 'next/image'
import { User } from '@/payload-types'

interface Props {
  user: User
}

export const Avatar: React.FC<Props> = ({ user }) => {
  return (
    <>
      {user.avatar &&
        typeof user.avatar !== 'number' &&
        user.avatar.sizes?.avatar?.url &&
        user.avatar.sizes?.avatar?.width &&
        user.avatar.sizes?.avatar?.height && (
          <Image
            className="avatar"
            src={user.avatar.sizes?.avatar?.url}
            alt={user.avatar.alt}
            width={user.avatar.sizes.avatar.width}
            height={user.avatar.sizes.avatar.height}
          />
        )}
    </>
  )
}
