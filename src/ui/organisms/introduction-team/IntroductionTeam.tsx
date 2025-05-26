'use client'

import './introduction-team.scss'

import { useRef, Fragment } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { Media } from '@/payload-types'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/atoms/link/Link'
import { useIntroductionTeamAnimation } from './useIntroductionTeamAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'introduction_team'>
}

export const IntroductionTeam: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  const video = data['highlight-video'].video as Media
  const thumbnail = data['highlight-video'].miniature as Media

  useIntroductionTeamAnimation(sectionRef, descriptionRef, videoRef)

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
          {data.members && data.members.length > 0 && (
            <div className="introduction_team_block__wrapper__left__team">
              {data.members.map((member) => (
                <Fragment key={member.id}>
                  {typeof member['profile-picture'] !== 'number' &&
                    member['profile-picture'].sizes?.avatar_large?.url &&
                    member['profile-picture'].sizes?.avatar_large?.width &&
                    member['profile-picture'].sizes?.avatar_large?.height && (
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
            <Link href="/decouvrir#feedback_block" variant="primary" internalLink>
              Voir les retours d&apos;expériences
            </Link>
            <Link href="/a-propos" variant="ghost" internalLink>
              Découvrir le collectif
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
