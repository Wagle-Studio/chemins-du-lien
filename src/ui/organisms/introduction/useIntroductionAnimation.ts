import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useIntroductionAnimation = (
  sectionRef: React.RefObject<HTMLElement | null>,
  subTitleRef: React.RefObject<HTMLDivElement | null>,
  descriptionRef: React.RefObject<HTMLDivElement | null>,
) => {
  useEffect(() => {
    if (!sectionRef.current || !subTitleRef.current || !descriptionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(subTitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 40,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.from(descriptionRef.current, {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef, subTitleRef, descriptionRef])
}
