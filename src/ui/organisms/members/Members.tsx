'use client'

import './members.scss'

import { useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { useMembersAnimation } from './useMembersAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'members'>
}

export const Members: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useMembersAnimation(sectionRef, listRef)

  return (
    <section
      ref={sectionRef}
      className={clsx('members_block', {
        'members_block--background': data.background,
      })}
    >
      <div className="members_block__wrapper">
        <ul ref={listRef} className="members_block__wrapper__list">
          {data.members?.map((member) => (
            <li key={member.id} className="members_block__wrapper__list__item">
              {typeof member['profile-picture'] !== 'number' &&
                member['profile-picture'].sizes?.avatar_large?.url &&
                member['profile-picture'].sizes?.avatar_large?.width &&
                member['profile-picture'].sizes?.avatar_large?.height && (
                  <Image
                    src={member['profile-picture'].sizes.avatar_large.url}
                    alt={member['profile-picture'].alt}
                    width={member['profile-picture'].sizes.avatar_large.width}
                    height={member['profile-picture'].sizes.avatar_large.height}
                    quality={100}
                  />
                )}
              <div className="members_block__wrapper__list__item__body">
                <h2 className="heading_3 with_bar_left">{member.title}</h2>
                <RichText data={member.description} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
