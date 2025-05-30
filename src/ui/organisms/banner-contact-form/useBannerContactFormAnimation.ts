import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useBannerContactFormAnimation = (refs: React.RefObject<HTMLDivElement | null>[]) => {
  if (!refs) return

  useEffect(() => {
    const ctx = gsap.context(() => {
      refs.forEach((ref) => {
        if (!ref.current) return

        gsap.from(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: 'power2.out',
        })
      })
    })

    return () => ctx.revert()
  }, [refs])
}
