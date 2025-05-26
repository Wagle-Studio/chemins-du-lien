import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useIntroductionWorkshopAnimation = (
  sectionRef: React.RefObject<HTMLElement | null>,
  descriptionRef: React.RefObject<HTMLDivElement | null>,
  workshopsListRef: React.RefObject<HTMLUListElement | null>,
) => {
  useEffect(() => {
    if (!sectionRef.current || !descriptionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(descriptionRef.current, {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: 'power2.out',
      })

      if (!workshopsListRef.current) return

      gsap.from(Array.from(workshopsListRef.current.children), {
        scrollTrigger: {
          trigger: workshopsListRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef, descriptionRef, workshopsListRef])
}
