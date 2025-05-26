import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useIntroductionEventsAnimation = (
  sectionRef: React.RefObject<HTMLElement | null>,
  descriptionRef: React.RefObject<HTMLDivElement | null>,
  eventsListRef: React.RefObject<HTMLUListElement | null>,
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

      if (!eventsListRef.current) return

      gsap.from(Array.from(eventsListRef.current.children), {
        scrollTrigger: {
          trigger: eventsListRef.current,
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
  }, [sectionRef, descriptionRef, eventsListRef])
}
