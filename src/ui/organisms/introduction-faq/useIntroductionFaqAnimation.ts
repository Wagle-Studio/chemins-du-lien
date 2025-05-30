import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useIntroductionFaqAnimation = (
  subtitleRef: React.RefObject<HTMLHeadingElement | null>,
  containerRef: React.RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    if (!subtitleRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        x: -30,
        duration: 0.5,
        ease: 'power2.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [subtitleRef, containerRef])
}
