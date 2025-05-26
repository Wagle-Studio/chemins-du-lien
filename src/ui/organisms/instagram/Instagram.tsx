'use client'

// TODO : make Instagram posts dynamique.

import './instagram.scss'

import { useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import post0 from './../../_assets/pictures/instagram_0.jpg'
import post1 from './../../_assets/pictures/instagram_1.jpg'
import post2 from './../../_assets/pictures/instagram_2.jpg'
import post3 from './../../_assets/pictures/instagram_3.jpg'
import { Link } from '@/ui/atoms/link/Link'
import { InstagramIcon } from '@/ui/atoms/icons/InstagramIcon'
import { ExternalLinkIcon } from '@/ui/atoms/icons/ExternalLinkIcon'
import { useInstagramAnimation } from './useInstagramAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'instagram'>
}

export const Instagram: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const linkToRef = useRef<HTMLAnchorElement>(null)

  useInstagramAnimation(sectionRef, headingRef, linkToRef)

  return (
    <section
      ref={sectionRef}
      className={clsx('instagram_block', {
        'instagram_block--background': data.background,
      })}
    >
      <div className="instagram_block__wrapper">
        <div className="instagram_block__wrapper__content">
          <h2 ref={headingRef} className="heading_1">
            Suivez-nous sur Instagram{' '}
            <InstagramIcon className="instagram_block__wrapper__content__icon" />
          </h2>
          <Link
            ref={linkToRef}
            href={data['profile-url']}
            className="heading_3 instagram_block__wrapper__content__link_to"
            target="_blank"
          >
            @chemins-du-lien
            <ExternalLinkIcon className="instagram_block__wrapper__content__link_to__icon" />
          </Link>
        </div>
        <ul className="instagram_block__wrapper__posts">
          <li>
            <Image src={post0} alt="Photo d'un post Instagram" quality={100} />
          </li>
          <li>
            <Image src={post1} alt="Photo d'un post Instagram Berger" quality={100} />
          </li>
          <li>
            <Image src={post2} alt="Photo d'un post Instagram" quality={100} />
          </li>
          <li>
            <Image src={post3} alt="Photo d'un post Instagram" quality={100} />
          </li>
        </ul>
      </div>
    </section>
  )
}
