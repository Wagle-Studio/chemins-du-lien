import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useIntroductionTeamAnimation = (
  sectionRef: React.RefObject<HTMLElement | null>,
  descriptionRef: React.RefObject<HTMLDivElement | null>,
  videoRef: React.RefObject<HTMLDivElement | null>,
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
        y: 30,
        duration: 0.5,
        ease: 'power2.out',
      })

      if (!videoRef.current) return

      gsap.from(Array.from(videoRef.current.children), {
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        x: 30,
        duration: 0.5,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef, descriptionRef, videoRef])
}
