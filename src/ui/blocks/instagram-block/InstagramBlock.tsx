'use client'

import './style.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import post0 from './../../_assets/pictures/instagram_0.jpg'
import post1 from './../../_assets/pictures/instagram_1.jpg'
import post2 from './../../_assets/pictures/instagram_2.jpg'
import post3 from './../../_assets/pictures/instagram_3.jpg'
import { InstagramIcon } from '@/ui/icons/InstagramIcon'
import { Link } from '@/ui/link/Link'
import { ExternalLinkIcon } from '@/ui/icons/ExternalLinkIcon'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  data: ExtractBlock<AllBlocks, 'instagram'>
}

export const InstagramBlock: React.FC<Props> = ({ data }: Props) => {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const linkToRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
        y: -40,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.from(linkToRef.current, {
        scrollTrigger: {
          trigger: linkToRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={clsx('instagram_block', { 'instagram_block--background': data.background })}
    >
      <div className="instagram_block__wrapper">
        <div className="instagram_block__wrapper__content">
          <h2 ref={headingRef} className="heading_1">
            Suivez-nous sur Instagram{' '}
            <InstagramIcon className="instagram_block__wrapper__content__icon" />
          </h2>
          <Link
            ref={linkToRef}
            href="https://www.instagram.com/"
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
