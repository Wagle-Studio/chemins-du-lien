import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useArticleRichTextPictureAnimation = (
  sectionRef: React.RefObject<HTMLElement | null>,
  contentRef: React.RefObject<HTMLDivElement | null>,
) => {
  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef, contentRef])
}
