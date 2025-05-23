'use client'

import './style.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  data: ExtractBlock<AllBlocks, 'introduction'>
}

export const IntroductionBlock: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const subTitleRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !subTitleRef.current || !descriptionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(subTitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 40,
        duration: 0.5,
        ease: 'power2.out',
      })

      if (descriptionRef.current) {
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
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={clsx('introduction_block', { 'introduction_block--background': data.background })}
    >
      <div className="introduction_block__wrapper">
        <div className="introduction_block__wrapper__content">
          <h1 className="heading_1">{data.title}</h1>
          <h2 ref={subTitleRef} className="heading_2 with_bar_left">
            {data.subtitle}
          </h2>
          <div ref={descriptionRef}>
            <ConvertRichText data={data.description} />
          </div>
        </div>
        {data.image &&
          typeof data.image !== 'number' &&
          data.image.sizes?.content?.url &&
          data.image.sizes?.content?.width &&
          data.image.sizes?.content?.height && (
            <Image
              className="introduction_block__wrapper__picture"
              src={data.image.sizes.content.url}
              alt={data.image.alt}
              width={data.image.sizes.content.width}
              height={data.image.sizes.content.height}
              quality={100}
            />
          )}
      </div>
    </section>
  )
}
