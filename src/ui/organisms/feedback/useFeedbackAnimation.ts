import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useFeedbackAnimation = (
  descriptionRef: React.RefObject<HTMLDivElement | null>,
  videoListRef: React.RefObject<HTMLUListElement | null>,
) => {
  useEffect(() => {
    if (!descriptionRef.current || !videoListRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(descriptionRef.current, {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.from(videoListRef.current, {
        scrollTrigger: {
          trigger: videoListRef.current,
          start: 'top 85%',
        },
        x: 60,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [descriptionRef, videoListRef])
}
