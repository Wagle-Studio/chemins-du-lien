import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useHeroPageAnimation = (
  sectionRef: React.RefObject<HTMLElement | null>,
  headingRef: React.RefObject<HTMLHeadingElement | null>,
  introductionRef: React.RefObject<HTMLHeadingElement | null>,
) => {
  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })

      if (!introductionRef.current) return

      gsap.from(introductionRef.current, {
        scrollTrigger: {
          trigger: introductionRef.current,
          start: 'top 80%',
        },
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef, headingRef, introductionRef])
}
