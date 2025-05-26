import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Workshop } from '@/payload-types'

gsap.registerPlugin(ScrollTrigger)

export const useWorkshopListAnimation = (
  listRef: React.RefObject<HTMLDivElement | null>,
  workshops: Workshop[],
) => {
  useEffect(() => {
    if (!listRef.current || workshops.length === 0) return

    const ctx = gsap.context(() => {
      gsap.from(Array.from(listRef.current!.children), {
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 85%',
        },
        y: -40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power2.out',
      })
    }, listRef)

    return () => ctx.revert()
  }, [listRef, workshops])
}
