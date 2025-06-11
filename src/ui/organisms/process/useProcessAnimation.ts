import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useProcessAnimation = (
  sectionRef: React.RefObject<HTMLElement | null>,
  stapesRef?: React.RefObject<HTMLUListElement | null>,
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!stapesRef?.current) return

      gsap.from(Array.from(stapesRef.current.children), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef, stapesRef])
}
