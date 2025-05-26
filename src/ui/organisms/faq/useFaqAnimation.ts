import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useFaqAnimation = (
  sectionRef: React.RefObject<HTMLElement | null>,
  faqListRef: React.RefObject<HTMLUListElement | null>,
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !faqListRef.current) return

      gsap.from(faqListRef.current, {
        scrollTrigger: {
          trigger: faqListRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: 'power2.out',
      })
    }, faqListRef)

    return () => ctx.revert()
  }, [sectionRef, faqListRef])
}
