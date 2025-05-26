import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useBookAuthorAnimation = (authorRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (!authorRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(authorRef.current, {
        scrollTrigger: {
          trigger: authorRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [authorRef])
}
