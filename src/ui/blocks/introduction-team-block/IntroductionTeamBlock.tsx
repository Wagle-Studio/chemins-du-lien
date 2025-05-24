'use client'

import './style.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { Fragment, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/link/Link'
import pp0 from './../../_assets/pictures/pp_0.png'
import pp1 from './../../_assets/pictures/pp_1.png'
import pp2 from './../../_assets/pictures/pp_2.png'
import pp3 from './../../_assets/pictures/pp_3.png'
import { Media } from '@/payload-types'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  data: ExtractBlock<AllBlocks, 'introduction_team'>
}

export const IntroductionTeamBlock: React.FC<Props> = ({ data }: Props) => {
  const sectionRef = useRef<HTMLElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  const video = data['highlight-video'].video as Media
  const thumbnail = data['highlight-video'].miniature as Media

  useEffect(() => {
    if (!sectionRef.current || !descriptionRef.current || !imagesRef.current || !videoRef.current)
      return

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

      gsap.from(Array.from(imagesRef.current!.children), {
        scrollTrigger: {
          trigger: imagesRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.from(Array.from(videoRef.current!.children), {
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
  }, [])

  return (
    <section
      ref={sectionRef}
      className={clsx('introduction_team_block', {
        'introduction_team_block--background': data.background,
      })}
    >
      <div className="introduction_team_block__wrapper">
        <div className="introduction_team_block__wrapper__left">
          <div className="introduction_team_block__wrapper__left__content">
            <h2 className="heading_1">{data.title}</h2>
            <div ref={descriptionRef}>
              <ConvertRichText data={data.description} />
            </div>
          </div>
          {data.members && data.members?.length > 0 && (
            <div ref={imagesRef} className="introduction_team_block__wrapper__left__team">
              {data.members.map((member) => (
                <Fragment key={member.id}>
                  {typeof member['profile-picture'] !== 'number' &&
                    member['profile-picture'].sizes &&
                    member['profile-picture'].sizes.avatar_large &&
                    member['profile-picture'].sizes.avatar_large.url &&
                    member['profile-picture'].sizes.avatar_large.width &&
                    member['profile-picture'].sizes.avatar_large.height && (
                      <Image
                        src={member['profile-picture'].sizes.avatar_large.url}
                        alt={member['profile-picture'].alt}
                        width={member['profile-picture'].sizes.avatar_large.width}
                        height={member['profile-picture'].sizes.avatar_large.height}
                        quality={100}
                      />
                    )}
                </Fragment>
              ))}
            </div>
          )}
        </div>
        <div className="introduction_team_block__wrapper__right">
          <div ref={videoRef} className="introduction_team_block__wrapper__right__video">
            <video
              className="introduction_team_block__wrapper__right__video__player"
              controls
              preload="metadata"
              poster={thumbnail.url ?? undefined}
            >
              {video.url && <source src={video.url} type="video/mp4" />}
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
          <div className="introduction_team_block__wrapper__right__cta">
            <Link href="/decouvrir" variant="primary" internalLink>
              Voir les retours d&apos;expériences
            </Link>
            <Link href="/collectif" variant="ghost" internalLink>
              Découvrir le collectif
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
