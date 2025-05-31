import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useWorkshopListHighlightAnimation = (
  workshopsListRef: React.RefObject<HTMLUListElement | null>,
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, workshopsListRef)

    return () => ctx.revert()
  }, [workshopsListRef])
}
