'use client'

import './not-found.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link } from '@/ui/atoms/link/Link'

export default function NotFoundPage() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const pRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current || !h1Ref.current || !pRef.current || !ctaRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(h1Ref.current, {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      })

      gsap.from(pRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      })

      gsap.from(ctaRef.current, {
        y: 40,
        opacity: 0,
        delay: 0.3,
        duration: 0.8,
        ease: 'power2.out',
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="not_found">
      <div ref={wrapperRef} className="not_found__wrapper">
        <div className="not_found__wrapper__content">
          <h1 ref={h1Ref} className="with_bar_left heading_1">
            Page introuvable
          </h1>
          <p ref={pRef}>La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
        </div>
        <div ref={ctaRef}>
          <Link href="/" variant="primary">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
