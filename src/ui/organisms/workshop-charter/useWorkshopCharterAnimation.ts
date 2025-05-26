import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useWorkshopCharterAnimation = (
  sectionRef: React.RefObject<HTMLElement | null>,
  listRef: React.RefObject<HTMLUListElement | null>,
) => {
  useEffect(() => {
    if (!sectionRef.current || !listRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(Array.from(listRef.current!.children), {
        scrollTrigger: {
          trigger: listRef.current,
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
  }, [sectionRef, listRef])
}
