import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useHeroHomepageAnimation = (
  heroRef: React.RefObject<HTMLDivElement | null>,
  titleRef: React.RefObject<HTMLDivElement | null>,
  ctaRef: React.RefObject<HTMLDivElement | null>,
) => {
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
  }, [heroRef, titleRef, ctaRef])
}
