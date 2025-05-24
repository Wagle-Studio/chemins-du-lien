'use client'

import './style.scss'
import { HTMLAttributes, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Link } from '@/ui/link/Link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const HomepageHero: React.FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !ctaRef.current) return

    const titleEl = titleRef.current!
    const ctaEl = ctaRef.current!

    const ctx = gsap.context(() => {
      gsap.from(titleEl, {
        scrollTrigger: {
          trigger: titleEl,
          start: 'top 80%',
        },
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.from(ctaEl, {
        scrollTrigger: {
          trigger: ctaEl,
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      id="homepage__hero_banner"
      ref={heroRef}
      className={clsx('homepage__hero_banner', className)}
      {...props}
    >
      <div className="homepage__hero_banner__overlay">
        <div className="homepage__hero_banner__overlay__content">
          <div className="homepage__hero_banner__overlay__content__wrapper">
            <div ref={titleRef} className="homepage__hero_banner__overlay__content__wrapper__title">
              <p className="heading_1">Chemins du lien</p>
              <p className="heading_3">de soi à l&apos;autre</p>
            </div>
            <div ref={ctaRef} className="homepage__hero_banner__overlay__content__wrapper__cta">
              <Link href="/decouvrir" variant="primary" internalLink>
                Découvrir le processus
              </Link>
              <Link href="/ateliers" variant="ghost" internalLink>
                Nos ateliers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
