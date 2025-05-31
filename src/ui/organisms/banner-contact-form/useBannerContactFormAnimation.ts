import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useBannerContactFormAnimation = (
  section: React.RefObject<HTMLElement | null>,
  cardRef: React.RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    if (!section.current || !cardRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [section, cardRef])
}
