'use client'

import './style.scss'
import clsx from 'clsx'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type Props = {
  data: ExtractBlock<AllBlocks, 'feedback'>
}

export const FeedbackBlock: React.FC<Props> = ({ data }) => {
  const highlightVideoRef = useRef<HTMLVideoElement | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [activeTitle, setActiveTitle] = useState<string | null>()
  const [activeVideo, setActiveVideo] = useState<Media | null>()
  const [activeThumbnail, setActiveThumbnail] = useState<Media | null>()

  useEffect(() => {
    setActiveTitle(
      data.videos && data.videos[activeIndex] && data.videos[activeIndex].title
        ? data.videos[activeIndex].title
        : null,
    )

    setActiveVideo(
      data.videos && data.videos[activeIndex] && data.videos[activeIndex].video
        ? (data.videos[activeIndex].video as Media)
        : null,
    )

    setActiveThumbnail(
      data.videos && data.videos[activeIndex] && data.videos[activeIndex].miniature
        ? (data.videos[activeIndex].miniature as Media)
        : null,
    )
  }, [activeIndex])

  return (
    <section className={clsx('feedback_block', { 'feedback_block--background': data.background })}>
      <div className="feedback_block__wrapper">
        <div className="feedback_block__wrapper__left">
          <h2 className="heading_1 with_bar_left">{data.title}</h2>
          <div>
            <ConvertRichText data={data.description} />
          </div>
        </div>
        <div className="feedback_block__wrapper__right">
          <div className="feedback_block__wrapper__right__video">
            <video
              key={activeVideo?.url}
              ref={highlightVideoRef}
              className="feedback_block__wrapper__right__video__player"
              controls
              preload="metadata"
              poster={activeThumbnail?.url ?? undefined}
            >
              {activeVideo && activeVideo.url && <source src={activeVideo.url} type="video/mp4" />}
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <p className="feedback_block__wrapper__right__video__title">{activeTitle}</p>
          </div>
          {data.videos && data.videos?.length > 0 && (
            <ul className="feedback_block__wrapper__right__videos">
              {data.videos.map((video, index) => (
                <li
                  key={video.id}
                  className="feedback_block__wrapper__right__videos__item"
                  onClick={() => setActiveIndex(index)}
                >
                  {video.miniature &&
                    typeof video.miniature !== 'number' &&
                    video.miniature.url &&
                    video.miniature.sizes?.content?.width &&
                    video.miniature.sizes.content?.height && (
                      <Image
                        className="feedback_block__wrapper__right__videos__item__thumbnail"
                        src={video.miniature.url}
                        alt={video.miniature.alt}
                        width={video.miniature.sizes.content.width}
                        height={video.miniature.sizes.content.height}
                        quality={100}
                      />
                    )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
