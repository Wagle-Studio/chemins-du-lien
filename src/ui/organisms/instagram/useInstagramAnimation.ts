import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useInstagramAnimation = (
  sectionRef: React.RefObject<HTMLElement | null>,
  headingRef: React.RefObject<HTMLHeadingElement | null>,
  linkToRef: React.RefObject<HTMLAnchorElement | null>,
) => {
  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !linkToRef.current) return

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
  }, [sectionRef, headingRef, linkToRef])
}
